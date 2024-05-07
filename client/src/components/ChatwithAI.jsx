import { useState, useEffect } from "react";
import axios from 'axios';



export default function ChatWithAI() {

const [generatedText, setGeneratedText] = useState([]);
const [loading, setLoading] = useState(false);
// //store user's love languages percentages. 
// //this ifo should come from a get request to the database.
// const [userLoveLanguages, setUserLoveLanguages] = useState({})
// //store user's input to ask for recommendations.
// //this info should come from a drop down menu input.
// const [askRecommendationsInput, setAskRecommendationsInput] = useState ({})

useEffect(() => {
  setUserLoveLanguages({})
}, []); 

// useEffect(() => {
//   console.log(generatedText);
// }, [generatedText]); 

//Trigger the query to the AI
//Send the correspondent prompt depending on which button is clicked.
function handleSubmitRecommendation(action, event){
  event.preventDefault()

  //prompt to get recommendations based on the person's love language.
const promptLoveLanguage = `Based on the book called The 5 Love Languages, give a list of recommendations to show appreciation to a person who's loves languages are: touch ${userLoveLanguages.nonSexualIntimacy}%, gifts ${userLoveLanguages.receiveGifts}%, acts of service${userLoveLanguages.actsOfService}%, words of affirmation ${userLoveLanguages.wordsOfaffirmation}%, quality time ${userLoveLanguages.qualityTime}%. Don't include recommendations for love languages that have a percentage of 0. DO NOT write any percentages in your response. Send recommendations without introduction text, just a list of recommendations. No titles`;
//prompt to get recommendations based on the user's input.
const promptUserInput = `Based on the book called The 5 Love Languages, give a list of recommendations of ${askRecommendationsInput.type} to show appreciation during ${askRecommendationsInput.occasion} to a person who's primary love language is ${askRecommendationsInput.primaryLoveLanguage}. Send recommendations without introduction text, just a list of recommendations. No titles`;

  if (action === "User input") {
    runGenerativeAI(promptUserInput)
  } 
  if (action === "Love language" && userLoveLanguages.Percentage_Words_of_Affirmation) {
    runGenerativeAI(promptLoveLanguage)
  } else if (action === "Love language" && !userLoveLanguages.Percentage_Words_of_Affirmation){window.alert("Please select a partner")}
}

//request to AI
//it posts the prompt with axios.
async function runGenerativeAI(prompt) {
  //Make sure generatedText variable is empty before doing anything else.
  setGeneratedText([])
    setLoading(true);
    try {
        const response = await axios.post('http://localhost:4000/generate-text', { prompt });
        const rawAIText= response.data.generatedText
        refineText(rawAIText);
        //console.log(generatedText)
    } catch (error) {
        console.error(error);
        setGeneratedText("There was an error in your request");
    } finally {
        setLoading(false);
    }
}

//transform string to array, so that we can map it to show the different recommendations to the user as a list.
//separate individual recommendations.
//get rid of empty spaces and punctuation marks
//populate the generatedText variable.
function refineText(rawAIText) {
    const lines = rawAIText.split('\n')
    const refinedText = lines.map((line)=> {
      return line.slice(2)
    })
    setGeneratedText(refinedText);
    console.log(refinedText)
   }


function updateUserLoveLanguages(user) { 
  setUserLoveLanguages(user)
}

function updateUserInput(input) {
  setAskRecommendationsInput(input)
}

  return (
    <>
      <h1>Ask the AI</h1>
      
      <div className="card">
      <h5>Get recommendations based on user input</h5>
      <AIDropDownInput 
        handleSubmitRecommendation={(action, event)=>handleSubmitRecommendation(action, event)}
        loading={loading}
        updateUserInput={(input)=>updateUserInput(input)}/>
      

        <h5>Get recommendations based on love language</h5>
       
        <button onClick={(event)=>handleSubmitRecommendation("Love language", event)} disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        

        {userLoveLanguages.firstname && <h5>Recommendations for {userLoveLanguages.firstname}:</h5>}
        {generatedText && Array.isArray(generatedText) && generatedText.map((recommendation, index)=>  (<p key={index}> {recommendation}</p>))}
      </div>
    </>
  );
};