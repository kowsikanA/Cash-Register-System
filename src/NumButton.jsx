import React from 'react'
import './NumButton.css'
function NumButton({ numberIndex, checkSelect, buttonSelect, buttonDeselect }) {
  return (
    <button
      className='num-button'
      key={numberIndex} 
      style={{
        borderColor: checkSelect ? 'red' : 'rgb(182, 182, 182)',
      }} 
      onClick={() => buttonSelect(numberIndex)} 
      onDoubleClick={buttonDeselect}>{numberIndex}
    </button>
  )
}

export default NumButton