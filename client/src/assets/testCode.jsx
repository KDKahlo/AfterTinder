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



