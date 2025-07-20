import React, { useState } from 'react'
import './Sample.css'
import NumButton from './NumButton';

function Sample() {


  const [clickedIndexHistory, setClickedIndexHistory] = useState([]); // sets a default empty array
  const [totalCost, setTotalCost] = useState(0); // sets the default value of totalCost to 0
  const [displayInfo, setDisplayInfo] = useState(false); // makes sure the information is displayed


  const numButtons = [];
  for (let i = 1; i < 21; i++) {
    numButtons.push(i);
  }


  function randomize(){
    let value;
    if (clickedIndexHistory.length !== 5){      
      value = Math.floor(Math.random() * 20) + 1; // random number between 1 to 20
      if (!clickedIndexHistory.includes(value)){ // if the index previously clicked is not in the list to avoid duplication
        setClickedIndexHistory([...clickedIndexHistory, value]) // adds the value in the list 
      }
    }
    
  }



  function addIndex(i) {
    if (clickedIndexHistory.length !== 5) { // makes sure the user doesnt click more than 5 numbers
      if (!clickedIndexHistory.includes(i)) { // if the index previously clicked is not in the list to avoid duplication
     
        setClickedIndexHistory([...clickedIndexHistory, i]); // adds the index to the index history
      } 
    }
  }


  function descriptionMarks() { // a fucntion that returns a description array 
    const descriptions = [];
    for (let i = 0; i < clickedIndexHistory.length; i++) {
      descriptions.push("Mark: " + clickedIndexHistory[i]); // puts the description into the array 
    }
    return descriptions;
  }

  function customerCost(value) {
    if (clickedIndexHistory.length == 5) {
      let total = totalCost + value;
      setTotalCost(total);// sets the total cost 
    } else{
      window.alert("You have to click on the 5 number palletes first"); // makes sure that the customer should pick 5 
    }
  }


  function reset() {// resets all state functions to default
    setClickedIndexHistory([]); 
    setTotalCost(0);
    setDisplayInfo(false);
  }

  return (
    <div className="container">

      <div>
        <img className='image' src='./lottery-balls.png' /> 
        <div className="input-pallete">
          <button className='btn' onClick={() => customerCost(1)}>$1</button>
          <button className='btn' onClick={() => customerCost(5)}>$5</button>
          <button className='btn' onClick={() => customerCost(10)}>$10</button>
          <button className='btn' onClick={() => customerCost(20)}>$20</button>
        </div>

      </div>

      <div className="number-keys">
        {numButtons.map((index) =>
          <NumButton className='btn num-button' key={index} numberIndex={index} checkSelect={clickedIndexHistory.includes(index)} buttonSelect={addIndex} buttonDeselect={() => setClickedIndexHistory(clickedIndexHistory.filter(clickedIndex => clickedIndex !== index))}/>

        )}

        <button className='btn cash-btn' onClick={()=>setDisplayInfo(true)}>Cash</button> 
        <button className='btn clear-btn'
          onClick={() => reset()}>Clear</button>

         <button className='btn random-btn'
          onClick={() => randomize()}>Random</button> 
      </div>
      
      <div className="console">
        <div className="information">
          <p>Numbers Selected</p>
          {displayInfo && descriptionMarks().map((describe) => // would display the information if displayInfo is true
            <p> {describe}</p>
          )}

        </div>
      
        {displayInfo && // would display info if displayInfo is true
        <p className='cost-value'>
          
          Total: ${totalCost}
          
          </p>
        }
      </div>
    </div>
  )
}

export default Sample;
