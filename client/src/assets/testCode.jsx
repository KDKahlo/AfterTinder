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

// `SELECT DISTINCT u2.firstname, FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE u1.id = 2 AND u2.firstname = "Sara";`
// "SELECT DISTINCT ur3.user_id, ur3.relationship_id FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users_relationships ur3 ON ur2.relationship_id = ur3.relationship_id JOIN users u2 ON ur3.user_id = u2.id WHERE u1.id = 2 AND u2.firstname = "Sara";"

// "SELECT DISTINCT u2.firstname, ur3.user_id, ur3.relationship_id FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users_relationships ur3 ON ur2.relationship_id = ur3.relationship_id JOIN users u2 ON ur3.user_id = u2.id WHERE u1.id = 2;"


// // SELECT u.firstname
// // FROM users u
// // JOIN users_relationships ur ON u.id = ur.user_id
// // WHERE ur.relationship_id IN (
// //     SELECT ur1.relationship_id
// //     FROM users_relationships ur1
// //     JOIN users_relationships ur2 ON ur1.relationship_id = ur2.relationship_id
// //     JOIN users u2 ON ur2.user_id = u2.id
// //     WHERE ur1.user_id = 2 AND u2.firstname = 'Sara'
// SELECT COUNT(u.firstname) FROM users u JOIN users_relationships ur ON u.id = ur.user_id WHERE ur.relationship_id IN (SELECT ur1.relationship_id FROM users_relationships ur1 JOIN users_relationships ur2 ON ur1.relationship_id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE ur1.user_id = 2 AND u2.firstname = 'Sara') GROUP BY ur.relationship_id;

"SELECT * FROM users_relationships WHERE user_id = 2 AND relationship_id=33;"

"SELECT COUNT(user_id) FROM users_relationships WHERE relationship_id=33;"

`SELECT COUNT(u.firstname) AS count FROM users u JOIN users_relationships ur ON u.id = ur.user_id WHERE ur.relationship_id IN (SELECT ur1.relationship_id FROM users_relationships ur1 JOIN users_relationships ur2 ON ur1.relationship_id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE ur1.user_id = ${user_id} AND u2.firstname = "${firstname}") GROUP BY ur.relationship_id;`

 // for (const relationship of relationship_ids){
        //     const result = await db(`SELECT COUNT(user_id) AS count FROM users_relationships WHERE relationship_id= ${relationship.relationship_id};`)
        // console.log(" isRelationshipActive QUERY RESULT", result.data)
        // }