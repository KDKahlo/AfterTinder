import { useState, useEffect } from "react";
import axios from 'axios';
import PartnersData from "./PartnersData";


export default function ChatWithAI() {

const [generatedText, setGeneratedText] = useState([]);
const [loading, setLoading] = useState(false);
//store user's love languages percentages. 
//this ifo should come from a get request to the database.
const [userLoveLanguages, setUserLoveLanguages] = useState({})
//store user's input to ask for recommendations.
//this info should come from a drop down menu input.
const [askRecommendationsInput, setAskRecommendationsInput] = useState ({
  type: "",
  occasion: "",
  primaryLoveLanguage: "",
  city: "no specific city"
})

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
  } else {window.alert("Please select a partner")}
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

//these variables store the labels and the values of the options in the drop down menu where user can select their choice.
   const type = [
    { label: 'Gifts', value: 'gifts' },
    { label: 'Plans', value: 'plans' },
    { label: 'Compliments', value: 'compliments' },
    { label: 'Physical touch gestures', value: 'non sexual intimacy gestures' },  
    { label: 'Act of service', value: 'act of service' },
    { label: 'Trips', value: 'trips' },  
];

const occasion = [
  { label: 'Birthday', value: 'birthday' },
  { label: 'Romantic date', value: 'romantic date' },
  { label: 'Normal day', value: 'normal day' },
  { label: 'Weekend trip', value: 'weekend trip' },  
  { label: 'Holidays', value: 'holidays' },
  { label: 'Anniversary', value: 'anniversary' },  
];

const primaryLoveLanguage = [
  { label: 'Physical touch', value: 'non sexual intimacy' },
  { label: 'Words of affirmation', value: 'Words of affirmation' },
  { label: 'Acts of service', value: 'Acts of service' },
  { label: 'Receive gifts', value: 'Receive gifts' },  
  { label: 'Quality time', value: 'Quality time' },  
];

function handleSelectDropdown(event){
  const value = event.target.value;
  const name = event.target.name;

  //setAskRecommendationsInput remembers previous state and it updates it with the new name and value. That means that when I select occasion, it doesn't forget the the type or the primary love language.
  setAskRecommendationsInput(state => ({
    ...state,
    [name]: value
  }));
}
function updateUserLoveLanguages(user) {
  
  setUserLoveLanguages(user)
}

  return (
    <>
      <h1>Ask the AI</h1>
      
      <div className="card">
      <h5>Get recommendations based on user input</h5>
      <form>

        <label > Type of recommendation
            <select 
                className="input-box"
                value={askRecommendationsInput.type} 
                onChange={handleSelectDropdown}
                name = "type">
            {type.map((type,index) => (
                <option 
                    value={type.value}
                    key = {index}>{type.label}</option>
            ))}
            </select>
        </label>
        <label> Select occasion
            <select 
                className="input-box"
                value={askRecommendationsInput.occasion} 
                name = "occasion"
                onChange={handleSelectDropdown}>
            {occasion.map((option, index) => (
                <option 
                    value={option.value}
                    key = {index}>{option.label}</option>
            ))}
            </select>
        </label>
        <label> Select primary love language
            <select 
                className="input-box"
                value={askRecommendationsInput.primaryLoveLanguage} 
                name = "primaryLoveLanguage"
                onChange={handleSelectDropdown}>
            {primaryLoveLanguage.map((option, index) => (
                <option value={option.value}
                key = {index}>{option.label}</option>
            ))}
            </select>
        </label>
        </form>
        <button onClick={(event)=>handleSubmitRecommendation("User input", event)} disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>

        <h5>Get recommendations based on love language</h5>
        <PartnersData updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/>
        <button onClick={(event)=>handleSubmitRecommendation("Love language", event)} disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        

        {userLoveLanguages.firstname && <h5>Recommendations for {userLoveLanguages.firstname}:</h5>}
        {generatedText && Array.isArray(generatedText) && generatedText.map((recommendation, index)=>  (<p key={index}> {recommendation}</p>))}
      </div>
    </>
  );
};