//USER REGISTRATION CODE TO TEST IN POSTMAN
//To manually test the user registration in Postman
//URL: http://localhost:4000/users/register
//Body (make sure "raw" and "json" are selected):
// {
//     "email": "example2@example.com",
//     "firstname": "Mary",
//     "password": "password1234"
//   }

//Body:
// {
//     "email": "example@example.com",
//     "firstname": "John",
//     "password": "password123"
//   }


//USER LOGIN CODE TO TEST IN POSTMAN
//URL: http://localhost:4000/users/login
// Body:
// {
//     "email": "example2@example.com",
//     "password": "password1234"
//   }


//RELATIONSHIP REGISTRATION CODE TO TEST IN POSTMAN
//To manually test the relationship registration in Postman
//URL: http://localhost:4000/users/relationships
//AUTHORISATION
//Type: bearer
//Token: the token you receive when you log in. It can be found in Postman's response for the login or in the browser--> inspect-->application(key and value table. when there's a token, ke key is "token" and the value is the token itself)
//Body:
// {
//     "code": "12345678"
//   }
//NOTE: "12345678" is a fake code to test the process of matching 2 users in a relationship. You can use Postman to enter the same code to 2 users and test the matching process.
//NOTE: if you are testing the relationship code the app provides, you can change this fake code for the real code the app provides in "http://localhost:5173/pairwithpartner"-->generate my code.
//when clicking in "generate my code", that user is automatically added to a relationship. Next step is to log in in Postman with the partner data and enter the code as explained above.


//USERS_RELATIONSHIP REGISTRATION CODE TO TEST IN POSTMAN
//to manually test users_relationships table.
//URL: http://localhost:4000/users/users_relationships
//AUTHORISATION
//Type: bearer
//Token: the token you receive when you log in. It can be found in Postman's response for the login or in the browser--> inspect-->application(key and value table. when there's a token, ke key is "token" and the value is the token itself)
//Body:
// {
//     "user_id": "2",
//     "relationship_id": "1"
//   }

//Body:
// {
//     "user_id": "1",
//     "relationship_id": "1"
//   }



//USERS LOVE LANGUAGES UPDATE REGISTRATION TO TEST IN POSTMAN
//URL: user
//Token: the token you receive when you log in. It can be found in Postman's response for the login or in the browser--> inspect-->application(key and value table. when there's a token, ke key is "token" and the value is the token itself)
//BODY:http://localhost:4000/users/lovelanguages
// {
//     "touch": 40,
//     "wordsOfAffirmation": 10,
//     "actsOfService":0,
//     "receiveGifts": 0,
//     "qualityTime": 50
//   }
