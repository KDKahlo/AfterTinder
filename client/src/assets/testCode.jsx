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
// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const geminiAPIKey= process.env.REACT_APP_API_KEY

// export default function ChatWithAI() {

// const genAI = new GoogleGenerativeAI(geminiAPIKey);

// const [generatedText, setGeneratedText] = useState(null);
// const [loading, setLoading] = useState(false);

//   async function runGenerativeAI() {
//     setLoading(true);
//     try {
//        // Enviroment Variable

//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//       const prompt =
//         "Give recommendations for a date night out?";

//       // Generate content based on the prompt
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();

//       setGeneratedText(text);
//     } catch (error) {
//       setGeneratedText("There was an error in your petition");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={runGenerativeAI} disabled={loading}>
//           {loading ? "Generating..." : "Generate Text"}
//         </button>
//         {generatedText !== null && <p>Generated Text: {generatedText}</p>}
//       </div>
//     </>
//   );
// };