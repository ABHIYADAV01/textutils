import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");

  const convertToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success")
  };

  const convertToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success")
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","Success")
  };




const capitalize = () =>{ 

  //const mySentence = "freeCodeCamp is an awesome resource";
const words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    
}

setText(words.join(" "));
props.showAlert("The text is Capitalised","Success")
  }



  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
        <div style={{color:props.mode=='dark'?'white':'black'}}> 
        {/* you can also add backgroundcolor by separating color with a comma */}
        <h1 >{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="myBox" className="form-label ">
            {props.myText}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button  disabled={text.length===0}className="btn btn-primary  " onClick={convertToUpper}>
          Covert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={convertToLower}>
          Covert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={capitalize}>
          Capitalize
        </button>
        <button  disabled={text.length===0}className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>

        
      </div>

      <div className="container my-4" style={{color:props.mode=='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p >
          The text contains {text.split( /\s +/).filter((element)=> {return element.length!==0}).length} words and {text.length}{" "}
          characters
        </p>
        <p >This text can be read in {0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview"}</p>
      </div>
    </>
  );
}
