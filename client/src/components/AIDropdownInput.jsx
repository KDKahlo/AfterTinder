import React, { useState, useEffect } from "react";

export default function AIDropDownInput({updateUserInput, handleSubmitRecommendation, loading}) {

//store user's input to ask for recommendations.
//this info should come from a drop down menu input.
const [recommendationsInput, setRecommendationsInput] = useState ({
    type: "",
    occasion: "",
    primaryLoveLanguage: "",
    city: "no specific city"
  })

  useEffect(() => {
    updateUserInput(recommendationsInput)
  }, [recommendationsInput]); 
   
//these variables store the labels and the values of the options in the drop down menu where user can select their choice.
const type = [
    { label: 'Select...', value: '' },
    { label: 'Gifts', value: 'gifts' },
    { label: 'Plans', value: 'plans' },
    { label: 'Compliments', value: 'compliments' },
    { label: 'Physical touch gestures', value: 'non sexual intimacy gestures' },  
    { label: 'Act of service', value: 'act of service' },
    { label: 'Trips', value: 'trips' },  
];

const occasion = [
    { label: 'Select...', value: '' },
    { label: 'Birthday', value: 'birthday' },
  { label: 'Romantic date', value: 'romantic date' },
  { label: 'Normal day', value: 'normal day' },
  { label: 'Weekend trip', value: 'weekend trip' },  
  { label: 'Holidays', value: 'holidays' },
  { label: 'Anniversary', value: 'anniversary' },  
];

const primaryLoveLanguage = [
    { label: 'Select...', value: '' },
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
  setRecommendationsInput(state => ({
    ...state,
    [name]: value
  }));
}

function handleSubmit(action, event) {
    event.preventDefault()
    handleSubmitRecommendation(action, event)
}


    return (
        <>
        <form onSubmit={(event)=>handleSubmit("User input", event)}>
        <label > Type of recommendation
            <select 
                className="input-box"
                value={recommendationsInput.type} 
                onChange={handleSelectDropdown}
                name = "type">
            {type.map((type,index) => (
                <option 
                    value={type.value}
                    key = {index}>{type.label}</option>
            ))}
            </select>
        </label>
        <label> Occasion
            <select 
                className="input-box"
                value={recommendationsInput.occasion} 
                name = "occasion"
                onChange={handleSelectDropdown}>
            {occasion.map((option, index) => (
                <option 
                    value={option.value}
                    key = {index}>{option.label}</option>
            ))}
            </select>
        </label>
        <label> Primary love language
            <select 
                className="input-box"
                value={recommendationsInput.primaryLoveLanguage} 
                name = "primaryLoveLanguage"
                onChange={handleSelectDropdown}>
            {primaryLoveLanguage.map((option, index) => (
                <option value={option.value}
                key = {index}>{option.label}</option>
            ))}
            </select>
        </label>
        <button  disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        </form>
        
        </>)
};