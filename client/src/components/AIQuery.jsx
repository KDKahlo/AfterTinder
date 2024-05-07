import { useState, useEffect } from "react";
import axios from 'axios';



export default function AIQuery({ prompt, handleLoading}) {

const [generatedText, setGeneratedText] = useState([]);


useEffect(() => {
    if (prompt) {
        runGenerativeAI(prompt);
      } else {}
}, [prompt]); 


//request to AI
//it posts the prompt with axios.
async function runGenerativeAI() {
  //Make sure generatedText variable is empty before doing anything else.
  setGeneratedText([])
  handleLoading(true);
    try {
        const response = await axios.post('http://localhost:4000/generate-text', { prompt });
        const rawAIText= response.data.generatedText
        refineText(rawAIText);
        //console.log(generatedText)
    } catch (error) {
        console.error(error);
        setGeneratedText("There was an error in your request");
    } finally {
        handleLoading(false);
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


  return (
    <>
      
      <div className="card">
        {generatedText && Array.isArray(generatedText) && generatedText.map((recommendation, index)=>  (<p key={index}> {recommendation}</p>))}
      </div>
    </>
  );
};