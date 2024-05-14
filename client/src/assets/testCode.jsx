//USER REGISTRATION CODE TO TEST IN POSTMAN
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
//URL: http://localhost:4000/users/relationships
//AUTHORISATION
//Type: bearer
//Token: the token you receive when you log in. It can be found in Postman's response for the login or in the browser--> inspect-->application(key and value table. when there's a token, ke key is "token" and the value is the token itself)
//Body:
// {
//     "code": "12345678"
//   }


//USERS_RELATIONSHIP REGISTRATION CODE TO TEST IN POSTMAN
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
//URL: 
//Token: the token you receive when you log in. It can be found in Postman's response for the login or in the browser--> inspect-->application(key and value table. when there's a token, ke key is "token" and the value is the token itself)
//BODY:
// {
//     "touch": 40,
//     "wordsOfAffirmation": 10,
//     "actsOfService":0,
//     "receiveGifts": 0,
//     "qualityTime": 50
//   }

// //THIS RETURNS THE RELATIONSHIP ID
// "SELECT DISTINCT r1.id FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE u1.id = 2 AND u2.firstname = "john";"
// //THIS RETURNS USER_ID AND RELATIONSHIP_ID
// "SELECT DISTINCT ur1.user_id, ur1.relationship_id FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE u1.id = 2 AND u2.firstname = "john";"
// "SELECT * FROM relationships WHERE relationship.id = "

`SELECT DISTINCT u2.firstname, u2.Percentage_Words_of_Affirmation, u2.Percentage_Quality_Time, u2.Percentage_Receiving_Gifts, u2.Percentage_Acts_of_Service, u2.Percentage_Physical_Touch FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE u1.id = 2 AND u2.id != 2 AND u2.firstname != ;`

