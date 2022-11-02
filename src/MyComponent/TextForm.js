import React, { useState } from "react";

export const TextForm = () => {

  const [text, setText] = useState("");
  const convertUpperCase = () => {

      setText(text.toUpperCase());
    
  };

  const convertLowerCase = () => { 
    setText(text.toLowerCase());

};

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearWindow = () => {
    setText("");
  };

  

  return (
    <div className="container">
      <div className="mb-3 my-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>Convert Alphabatic Case</h3>
        </label>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary"  onClick={convertUpperCase}>
        Convert Upper Case
      </button>
      
      <button
        type="button"
        className="btn btn-primary"
      
        onClick={convertLowerCase}
      >
        Convert Lower Case
      </button>
      <button type="button" className="btn btn-primary"  onClick={clearWindow}>
        Cleare
      </button>
      <h3>Summery</h3>
      <span>Total Words: {text.split(" ").length}</span> <span>Total Character: {text.length}</span>
      <h3>Preview</h3>
      <span>{text}</span>
    </div>
  );
};
