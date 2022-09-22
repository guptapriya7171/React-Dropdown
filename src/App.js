import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";
import "./style.css";
import salutingGif from './assets/salutingGif.gif';

export default function App() {

  const [optionValue, setOptionValue] = useState("");
  
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
    
  };

  return (
    <div>
      
      <h2>Welcome Visitors</h2>
      <img src={salutingGif} alt="img" class="center"/> 
      <Dropdown
        formLabel="Choose a country to submit:"
        buttonText="Submit"
        onChange={handleSelect}
        // action="/"
      >
        <Option selected value="Click to see options" input={optionValue} />
        <Option value="Europe" />
        <Option value="India" />
        <Option value="USA" />
      </Dropdown>
    </div>
  );
}
