import { useState, useEffect } from "react";
import axios from 'axios';


export default function ChatWithAI() {

const [generatedText, setGeneratedText] = useState([]);
const [loading, setLoading] = useState(false);
const [userLoveLanguages, setUserLoveLanguages] = useState(
  {
    touch: "10",
    wordsOfaffirmation: "0",
    actsOfService: "10",
    receiveGifts:"70",
    qualityTime:"10"
  }
)

useEffect(() => {
  console.log(generatedText);
}, [generatedText]); 

async function runGenerativeAI() {
  setGeneratedText([])
    setLoading(true);
    try {
        const prompt = `Based on the book called The 5 Love Languages, give a list of recommendations to show appreciation to a person who's loves languages are: touch ${userLoveLanguages.touch}%, gifts ${userLoveLanguages.receiveGifts}%, acts of service${userLoveLanguages.actsOfService}%, words of affirmation ${userLoveLanguages.wordsOfaffirmation}%, quality time ${userLoveLanguages.qualityTime}%. Don't include recommendations for love languages that have a percentage of 0. DO NOT write any percentages in your response. Send recommendations without introduction text, just a list of recommendations. No titles`;

      
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={runGenerativeAI} disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        {/* {generatedText !== null && <p>Generated Text: {generatedText}</p>} */}
        {generatedText && generatedText.map((recommendation, index)=>  (<p key={index}>{recommendation}</p>))}
      </div>
    </>
  );
};