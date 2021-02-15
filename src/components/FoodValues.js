import React, { useState } from "react";
import Macros from './Macros'
import '../App.css'
function FoodValues() {
  const [foodName, setFoodName] = useState("");
  const [food, setFood]=useState(null)
 

  function handleChange(e) {
    setFoodName(e.target.value);
  }

  function handleClick(){
    fetch(
        `https://api.spoonacular.com/food/ingredients/search?apiKey=5528f09e6d6a44009bfb478b52f52d0f&query=${foodName}&number=10`
      )
        .then((response) => response.json())
        .then((data) => {
          setFood(data);
          console.log(data);
        })
        .catch(() => {
          console.log("error");
        });
        
  }



  return (
    <div className="food">
      <section className='controls'>
        <input type="text" placeholder="Search ingredients" onChange={handleChange} className='foodName' />
        <button onClick={handleClick}>click <i className="fa fa-search"></i> me</button>
      </section>
     <section>{food && food.results.map((e)=>{return <ul className='box' key={e.id}><li className='name'>{e.name}</li>{<Macros food={e.id}/>}</ul>})}</section>
   
    </div>
    
  );
}

export default FoodValues;
