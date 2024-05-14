var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;


const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const relationshipExists = require("../guards/relationshipExists");
const isRelationshipActive = require("../guards/IsRelationshipActive")
const findSharedRelationship= require("../guards/findSharedRelationship")


const supersecret = process.env.SUPER_SECRET;

/* GET users listing. */
//Initial code in the scaffolding. Nothing to do with our app.
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//Register new user and populate users table.
router.post("/register", async (req, res) => {
  const { email, firstname, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await db(
      `INSERT INTO users (email, firstname, password) VALUES ("${email}", "${firstname}", "${hash}")`
    );
    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists so we can compare the password
    const result = await db(`SELECT * FROM users WHERE email = "${email}"`);
    const user = result.data[0]; // Assuming result.data is the correct path to user data

    // If we do not have a user, send an error message
    if (!user) {
      console.error("Login attempt failed: User not found for email: ${email}");
      return res.status(404).send({ message: "User not found" });
    }

    // Store user id in a variable
    const user_id = user.id;

    // Compare the password
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      console.error(
        "Login attempt failed: Incorrect password for user ${email}"
      );
      return res.status(401).send({ message: "Incorrect password" });
    }

    // If password is correct, create token
    const token = jwt.sign({ user_id }, supersecret);
    res.send({ message: "Login successful, here is your token", token });
  } catch (err) {
    console.error("Internal server error on login", err);
    // Send a general error message, avoid sending specific database errors
    res.status(500).send({ message: "Login failed due to an internal error" });
  }
});

//update user's table with quiz results.
router.post("/loveLanguage", userShouldBeLoggedIn, async (req, res) => {
  //all this comes from the frontend
  const {
    touch,
    wordsOfAffirmation,
    actsOfService,
    receiveGifts,
    qualityTime,
  } = req.body;
  //user_id comes from userShouldBeLoggedIn
  const user_id = req.user_id;
  try {
    await db(
      `UPDATE users SET Percentage_Physical_Touch = "${touch}", Percentage_Words_of_Affirmation = "${wordsOfAffirmation}", Percentage_Acts_of_Service = "${actsOfService}", Percentage_Receiving_Gifts = "${receiveGifts}", Percentage_Quality_Time = "${qualityTime}" WHERE id = "${user_id}";`
    );
    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Check user's id (with userShouldBeLoggeIn)
//get info from that user.
//send the data in the response.
router.get("/loveLanguage", userShouldBeLoggedIn, async (req, res) => {
  const user_id = req.user_id;
  try {
    const result = await db(
      `SELECT Percentage_Physical_Touch, Percentage_Words_of_Affirmation, Percentage_Acts_of_Service, Percentage_Receiving_Gifts, Percentage_Quality_Time FROM users WHERE id = "${user_id}";`
    );
    res.send(result.data);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post(
  "/relationships",
  userShouldBeLoggedIn,
  relationshipExists,
  async (req, res) => {
    //the guard userShouldBeLoggedIn is sending the user_id
    const user_id = req.user_id;
    //the guard relationshipExists is sending the relationship_id
    const relationship_id = req.relationship_id;
    try {
      await db(
        `INSERT INTO users_relationships (user_id, relationship_id) VALUES ("${user_id}","${relationship_id}")`
      );

      res.send({ message: "Relationship successfully registered" });
    } catch (err) {
      console.log("EEEEEERRRRROOOOOORRRRRR", err);
      //if the code already exists, the error message is:  { "message": "ER_DUP_ENTRY: Duplicate entry '12345678' for key 'relationships.code'"}
      //we can identify this error in the front end and use it to ask the user to re-generate code and and try again
      res.status(400).send({ message: err.message });
    }
  }
);

router.delete("/relationships", userShouldBeLoggedIn, findSharedRelationship, isRelationshipActive, async (req, res) => {
  const user_id = req.user_id;
  const checkedRelationships= req.checkedRelationships;
  const {firstname} = req.body
  
  console.log("relationships users", checkedRelationships)
  console.log()
  try {
    for (const relationship of checkedRelationships) {
      if(relationship.active === true) {
        console.log("ACTIVE RELATIONSHIP", relationship.relationship_id)
        await db(`DELETE FROM users_relationships WHERE user_id = ${user_id} AND relationship_id= ${relationship.relationship_id};`)
      } else if (relationship.active === false)  {
        console.log("INACTIVE RELATIONSHIP", relationship.relationship_id)
        await db(`DELETE FROM relationships WHERE id= ${relationship.relationship_id};`)
      }
    }
    res.status(200).send({ message: "Relationship abandoned"});
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});



router.get("/user_data", userShouldBeLoggedIn, async (req, res) => {
  const user_id = req.user_id;
  try {
    const result = await db(
      `SELECT firstname, Percentage_Words_of_Affirmation, Percentage_Quality_Time, Percentage_Receiving_Gifts, Percentage_Acts_of_Service, Percentage_Physical_Touch FROM users WHERE users.id = ${user_id};`
    );
    console.log(result.data);
    res.send(result.data);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
