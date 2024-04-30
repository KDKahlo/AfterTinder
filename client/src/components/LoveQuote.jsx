import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function LoveQuote() {
const[loveQuote, setLoveQuote]= useState("")

useEffect(() => {
    
    getLoveQuote()
    
    }, []);

//this is the syntax proposed by RapidAPI. 
//Instead of passing headers, method and url inside the request, it creates an object called options that holds all the necessary info.
const options = {
  method: 'GET',
  url: 'https://love-quote.p.rapidapi.com/lovequote',
  headers: {
    'X-RapidAPI-Key': '8352e5b3a5msh8b1b653715e9095p1e8357jsncb4ca27a0aa8',
    'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
  }
};
const getLoveQuote = async () => {

try {
	const response = await axios.request(options);
	console.log(response.data);
    setLoveQuote(response.data)
} catch (error) {
	console.error(error);
}
}

return (<h6>{loveQuote.quote}({loveQuote.author})</h6>)
};
