import React from 'react';

function Color({ onColorChange, flagChange, changeAllColor }) {
  const colors = ['red', 'blue', 'green', 'purple'];
  return (
    <div className='style'>
      {colors.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color, margin: '5px', padding: '10px', color: 'white' }}
          onClick={() => flagChange ? changeAllColor(color) : onColorChange(color)}>
          {color}</button>
      ))}
    </div>
  );
}

export default Color;