import React, { useState, useEffect } from "react";
import AIQuery from "./AIQuery";
import HeroRomanticIdeas from "./HeroRomanticIdeas";

export default function AIDropDownInput() {
  //store user's input to ask for recommendations.
  //this info should come from a drop down menu input.
  const [recommendationsInput, setRecommendationsInput] = useState({
    type: "",
    occasion: "",
    primaryLoveLanguage: "",
    city: "no specific city",
  });
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const promptUserInput = `Based on the book called The 5 Love Languages, give a list of recommendations of ${recommendationsInput.type} to show appreciation during ${recommendationsInput.occasion} to a person who's primary love language is ${recommendationsInput.primaryLoveLanguage}. Send recommendations without introduction text, just a list of recommendations. No titles`;

  useEffect(() => {
    setPrompt("");
  }, []);

  //these variables store the labels and the values of the options in the drop down menu where user can select their choice.
  const type = [
    { label: "Select...", value: "" },
    { label: "Gifts", value: "gifts" },
    { label: "Plans", value: "plans" },
    { label: "Compliments", value: "compliments" },
    { label: "Physical touch gestures", value: "non sexual intimacy gestures" },
    { label: "Act of service", value: "act of service" },
    { label: "Trips", value: "trips" },
  ];

  const occasion = [
    { label: "Select...", value: "" },
    { label: "Birthday", value: "birthday" },
    { label: "Romantic date", value: "romantic date" },
    { label: "Normal day", value: "normal day" },
    { label: "Weekend trip", value: "weekend trip" },
    { label: "Holidays", value: "holidays" },
    { label: "Anniversary", value: "anniversary" },
  ];

  const primaryLoveLanguage = [
    { label: "Select...", value: "" },
    { label: "Physical touch", value: "non sexual intimacy" },
    { label: "Words of affirmation", value: "Words of affirmation" },
    { label: "Acts of service", value: "Acts of service" },
    { label: "Receive gifts", value: "Receive gifts" },
    { label: "Quality time", value: "Quality time" },
  ];

  function handleSelectDropdown(event) {
    const value = event.target.value;
    const name = event.target.name;

    //setAskRecommendationsInput remembers previous state and it updates it with the new name and value. That means that when I select occasion, it doesn't forget the the type or the primary love language.
    setRecommendationsInput((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleLoading(status) {
    setLoading(status);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !recommendationsInput.type.length ||
      !recommendationsInput.occasion.length ||
      !recommendationsInput.primaryLoveLanguage.length
    ) {
      window.alert("please, select type, occasion and Primary love language");
    } else {
      setPrompt(promptUserInput);
    }
  }

  return (
    <div className="home-container">
      {/* Adds HeroRomanticIdeas */}
      <HeroRomanticIdeas />
  
      {/* Formulario */}
      <section className="form-section mt-5">
        <div className="container text-center">
          {/* Contenedor de los elementos del formulario */}
          <div className="form-container">
            {/* Contenedor 1 */}
            <div className="form-element">
              <div className="input-group">
                <label>Type of recommendation</label>
                <div className="input-container">
                  <select
                    className="input-box"
                    value={recommendationsInput.type}
                    onChange={handleSelectDropdown}
                    name="type"
                    style={{
                      width: '200px', // Establece el ancho deseado
                      border: '1px solid #ccc', // Establece el borde con un color particular
                      borderRadius: '5px', // Hace que los bordes sean redondeados
                      padding: '8px' // Agrega un espacio interno entre el borde y el contenido
                    }}
                  >
                    {type.map((type, index) => (
                      <option value={type.value} key={index}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
  
            {/* Contenedor 2 */}
            <div className="form-element">
              <div className="input-group">
                <label >Occasion</label>
                <div className="input-container">
                  <select
                    className="input-box"
                    value={recommendationsInput.occasion}
                    name="occasion"
                    onChange={handleSelectDropdown}
                    style={{
                      width: '200px', // Establece el ancho deseado
                      border: '1px solid #ccc', // Establece el borde con un color particular
                      borderRadius: '5px', // Hace que los bordes sean redondeados
                      padding: '8px' // Agrega un espacio interno entre el borde y el contenido
                    }}
                  >
                    {occasion.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
  
            {/* Contenedor 3 */}
            <div className="form-element">
              <div className="input-group">
                <label>Primary love language</label>
                <div className="input-container">
                  <select
                    className="input-box"
                    value={recommendationsInput.primaryLoveLanguage}
                    name="primaryLoveLanguage"
                    onChange={handleSelectDropdown}
                    style={{
                      width: '200px', // Establece el ancho deseado
                      border: '1px solid #ccc', // Establece el borde con un color particular
                      borderRadius: '5px', // Hace que los bordes sean redondeados
                      padding: '8px' // Agrega un espacio interno entre el borde y el contenido
                    }}
                  >
                    {primaryLoveLanguage.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
  
            {/* Botón */}
            <div className="form-element">
              <button className="btn btn-primary" disabled={loading} onClick={handleSubmit}>
                {loading ? "Generating..." : "Give me ideas!"}
              </button>
            </div>
          </div>
        </div>
      </section>
  
      {/* AIQuery Section */}
      <AIQuery
        prompt={prompt}
        handleLoading={(status) => handleLoading(status)}
      />
    </div>
  );
  
                  }  