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

//
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

module.exports = router;
