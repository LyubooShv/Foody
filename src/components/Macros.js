import React, { useState,useEffect } from "react";
import MacroList from './MacroList'
function Macros({ food }) {
  const [macros, setMacros] = useState(null);

  useEffect(()=>{fetch(
    `https://api.spoonacular.com/food/ingredients/${food}/information?apiKey=5528f09e6d6a44009bfb478b52f52d0f&unit=grams&amount=100`
  )
    .then((response) => response.json())
    .then((data) => {
      setMacros(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
  },[food])
  
 return <>{macros && <MacroList macros={macros}/>}</>
}

export default Macros;
