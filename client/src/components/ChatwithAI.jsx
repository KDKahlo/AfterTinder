import { useState } from "react";
import axios from 'axios';


export default function ChatWithAI() {

const [generatedText, setGeneratedText] = useState(null);
const [loading, setLoading] = useState(false);

async function runGenerativeAI() {
    setLoading(true);
    try {
        const prompt = "Give recommendations for a date night out?";
        const response = await axios.post('http://localhost:4000/generate-text', { prompt });
        setGeneratedText(response.data.generatedText);
    } catch (error) {
        console.error(error);
        setGeneratedText("There was an error in your request");
    } finally {
        setLoading(false);
    }
}

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={runGenerativeAI} disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        {generatedText !== null && <p>Generated Text: {generatedText}</p>}
      </div>
    </>
  );
};