var express = require('express');
var router = express.Router();
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const  geminiAPIKey = process.env.BARD_API_KEY;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/generate-text', async (req, res) => {
  try {
      const { prompt } = req.body;
      console.log(prompt)
      const genAI = new GoogleGenerativeAI(geminiAPIKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      res.json({ generatedText: text });
  } catch (error) {
    console.log("ERRRRRRRROOOOORRRR", error)
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
