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
//Body:
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








//CHAT AI
// function refineText(rawAIText) {
//     const lines = rawAIText.split('\n')
//     const refinedText = lines.forEach(line=> {
//       line.substring(2, line.length)
//     })
// //     console.log(refinedText)
// //   }

// unction refineText(rawAIText) {
//     const lines = rawAIText.split('\n')
//     setGeneratedText(lines);
   
//     console.log(lines)
//   }

"- Offer physical affection such as hugs, kisses, or massages.\n- Give thoughtful gifts that demonstrate your understanding of their interests and needs.\n- Perform acts of service to lighten their load, such as running errands or cooking dinner.\n- Spend quality time together, engaging in activities that they enjoy.\n- Express appreciation through handwritten notes or small tokens of affection.\n- Purchase items that they have been expressing interest in.\n- Plan special outings or experiences that cr..."

// const [askRecommendationsInput, setAskRecommendationsInput] = useState ({
//     type: "trip",
//     occasion: "birthday",
//     primaryLoveLanguage: "recieve gifts",
//     city: "no specific city"
//   })

// const [userLoveLanguages, setUserLoveLanguages] = useState(
//     {
//       nonSexualIntimacy: "90",
//       wordsOfaffirmation: "0",
//       actsOfService: "0",
//       receiveGifts:"10",
//       qualityTime:"0"
//     }
//   )