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


//SELECT users.*, relationship_id FROM users LEFT JOIN users_relationships ON users.id = users_relationships.user_id WHERE users.id = 1
// ORDER BY purchases.date_time;

// SELECT * FROM users WHERE id IN (SELECT DISTINCT u2.id FROM users u1, relationships r1, relationships r2, users_relationships ur1, users_relationships ur2, users u2 WHERE u1.id = 1 AND ur1.user_id = u1.id AND ur1.relationship_id = r1.id AND ur2.relationship_id = r2.id AND ur2.user_id != u1.id AND u2.id = ur2.user_id);

// SELECT DISTINCT u2.* FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE u1.id = ${user_id} AND u2.id != ${user_id};