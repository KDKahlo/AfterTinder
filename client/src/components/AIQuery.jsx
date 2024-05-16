import { useState, useEffect } from "react";
import axios from 'axios';



export default function AIQuery({ prompt, handleLoading}) {

const [generatedText, setGeneratedText] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(() => {
    if (prompt) {
        runGenerativeAI(prompt);
      } else {}
}, [prompt]); 


//request to AI
//it posts the prompt with axios.
async function runGenerativeAI(prompt) {
  //Make sure generatedText variable is empty before doing anything else.
  setGeneratedText([])
  setLoading(true); // set loading state
    try {
        const response = await axios.post('http://localhost:4000/generate-text', { prompt });
        const rawAIText= response.data.generatedText
        refineText(rawAIText);
        console.log(rawAIText)
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
    const lines = rawAIText.split('\n');
    const refinedText = lines.map((line) => line.slice(2));
    setGeneratedText(refinedText);
    console.log(refineText)
  }


  return (
      <div className="container mt-5 p-3 shadow bg-white rounded text-center">
        <h5>💜 Your romantic ideas 💜</h5>
        {loading ? (
        <p>Generating ideas...</p>
      ) : (
        generatedText.map((recommendation, index) => (
          <p key={index}>{recommendation}</p>
        ))
      )}
    </div>
  );
}