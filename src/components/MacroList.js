import React from 'react'

function MacroList({macros}){
    const nutrients=macros.nutrition.nutrients
    return(<div className='macros'><li>Calories: {nutrients[0].amount}{nutrients[0].unit}</li>
        <li>Fat: {nutrients[7].amount}{nutrients[7].unit}</li>
        <li>Protein: {nutrients[3].amount}{nutrients[3].unit}</li>
        <li>Sugar: {nutrients[16].amount}{nutrients[16].unit}</li>
        <li>Carbohydrates: {nutrients[6].amount}{nutrients[6].unit}</li>
        <li>Saturated Fat: {nutrients[14].amount}{nutrients[14].unit}</li></div>)
}
export default MacroList