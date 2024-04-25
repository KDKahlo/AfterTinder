var jwt = require("jsonwebtoken");
require("dotenv").config();

const supersecret = process.env.SUPER_SECRET;

function userShouldBeLoggedIn (req, res, next) {
      //get the token from the headers
  const token = req.headers["authorization"].replace(/^Bearer\s/, "");
  //if there's no token, send a message.
  if (!token) {
    res.status(400).send({message: "Please provide a token"})
  } else {
    //if there's a token, verify it
    //jwt.verify takes 3 arguments: the token, the supersecret and a callback function.
    //the callback function always takes 2 default arguments: an error or the decoded token.
    //in the payload we encoded the token. Now it's decoded. If it's not valid, there will be an error.
    jwt.verify (token, supersecret, async function(err, decoded){
    //if token is not working, send message (using the cb function of the verify method)
      if (err) {
      //the token will be valid but it doesn't belong here, so we send 401 error. 
      //the error always has a message, so we can just send that as message.
      res.status(401).send({message: err.message})
      } else {
        //if token valid, send user data (results).
        const user_id = decoded.user_id;
        //I want to provide the user's id to the next function
        //I can do this by adding a new property to the req object and the value will be the user_id decoded.
        req.user_id = user_id;
        //Call the next function
        next()
      }
  })
  }
}
module.exports = userShouldBeLoggedIn;