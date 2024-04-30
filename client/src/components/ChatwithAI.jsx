import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const { VITE_BARD_API_KEY } = import.meta.env;

export default function ChatWithAI() {


const [generatedText, setGeneratedText] = useState(null);
const [loading, setLoading] = useState(false);

  async function runGenerativeAI() {
    setLoading(true);
    try {
       // Enviroment Variable
        const genAI = new GoogleGenerativeAI(VITE_BARD_API_KEY);

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt =
        "Give recommendations for a date night out?";

      // Generate content based on the prompt
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setGeneratedText(text);
    } catch (error) {
      setGeneratedText("There was an error in your petition");
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