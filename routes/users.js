var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

/* GET users listing. */
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

//register new relationship and populate relationships table
router.post("/relationships", async (req, res) => {
  const { code } = req.body;
  try {
    await db(
      `INSERT INTO relationships (code) VALUES ("${code}")`
    );
    const result = await db(`SELECT * FROM relationships WHERE code = "${code}" `)
      console.log(result)
    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Get id from relationships table.
//Not sure we need this endpoint.
//I created it to explore how we can get the id of a relationship so that we can send it to the users_relationships table.
router.get("/relationships", async (req, res) => {
  const { code } = req.body;
  try {
    const result = await db(`SELECT id FROM relationships WHERE code = "${code}" `)
    console.log(result)
  
     res.send(result.data[0]);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Populate users_relationships table to relate a specific user to a specific relationship.
router.post("/users_relationships", async (req, res) => {
  const { user_id, relationship_id } = req.body;

  try {

    await db(
      `INSERT INTO users_relationships (user_id, relationship_id) VALUES ("${user_id}","${relationship_id}" )`
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
