var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const relationshipExists = require("../guards/relationshipExists")

const supersecret = process.env.SUPER_SECRET;

/* GET users listing. */
//Initial code in the scaffolding. Nothing to do with our app.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
//check if the user exists so we can compare the password
const result = await db(`SELECT * FROM users WHERE email = "${email}"`);
//result is an array that holds an object with all the data of the user.
//we should receive just one object
//we can access the object by index [0]
const user = result.data[0]
//if I have a user
if (user) {
  //store user id in a variable
  const user_id = user.id
  //I want to compare the password. this returns a boolean.
  const correctPassword = await bcrypt.compare(password, user.password)
  //if password incorrect, throw error
  if(!correctPassword) {
    throw new Error ("Incorrect password");
  }
  //if password is correct, create token. jwt.sign(payload, secret). 
  //Payload is an object {user_id : user_id}
  const token = jwt.sign({user_id}, supersecret);
  res.send({ message: "Login successful, here is your token", token })
}
//else: I don't have a user
  } catch(err) {
    res.status(400).send({message: err.message})
  }
});

//update user's table with qiz results.
router.post("/loveLanguage", userShouldBeLoggedIn, async (req, res) => {
  //all this comes from the frontend
  const { touch, wordsOfAffirmation, actsOfService, receiveGifts, qualityTime } = req.body;
  //user_id comes from userShouldBeLoggedIn
  const user_id = req.user_id
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
  const user_id = req.user_id
  try {
    const result = await db(
      `SELECT Percentage_Physical_Touch, Percentage_Words_of_Affirmation, Percentage_Acts_of_Service, Percentage_Receiving_Gifts, Percentage_Quality_Time FROM users WHERE id = "${user_id}";`
    );
    res.send(result.data);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


router.post("/relationships", userShouldBeLoggedIn, relationshipExists, async (req, res) => {
  //the guard userShouldBeLoggedIn is sending the user_id
  const user_id = req.user_id
  //the guard relationshipExists is sending the relationship_id
  const relationship_id= req.relationship_id
  try {
    await db(
      `INSERT INTO users_relationships (user_id, relationship_id) VALUES ("${user_id}","${relationship_id}")`
    );
    
    res.send({ message: "Relationship successfully registered" });
  } catch (err) {
    console.log("EEEEEERRRRROOOOOORRRRRR", err)
    //if the code already exists, the error message is:  { "message": "ER_DUP_ENTRY: Duplicate entry '12345678' for key 'relationships.code'"}
    //we can identify this error in the front end and use it to ask the user to re-generate code and and try again
    res.status(400).send({ message: err.message });
  }
});


module.exports = router;
