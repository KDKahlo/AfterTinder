import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function LoveQuote() {
const[loveQuote, setLoveQuote]= useState(null) // This line initializes the "loveQuote" state variable to null. This state will later hold the data fetched from the API.

useEffect(() => {
    getLoveQuote()
    }, []);


const getLoveQuote = async () => {

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

try {
	const response = await axios(options);
	console.log(response.data);
    setLoveQuote(response.data)
} catch (error) {
	console.error(error);
}
}

  return 
  (<>{loveQuote && <h6>{loveQuote.quote}({loveQuote.author})</h6>}</>)

};