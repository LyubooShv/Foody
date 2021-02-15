import React from "react";
import img from './img.jpg'
export function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="appHeader">Foody</h1>
      </header>

      <h3 className="homeText">
        This is Foody app. It is an application which gives you daily meal plan
        when you insert the wanted amount of calories for the day. It also
        allows you to search food ingredients by name and gives you their
        macros.
      </h3>
      <p className="homeText">
        I hope it helps you to achive a healthier life, Enjoy!
      </p>
      <img
        src={img}
        alt="healthy life"
        className='health'
      />
    </div>
  );
}
