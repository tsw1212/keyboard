import React from 'react';

function Size({ onSizeChange, flagChange, changeAllSize }) {
  const sizes = [18, 22, 26];
  return (
    <div className='style'>
      {sizes.map((size, index) => (
        <button
          key={index}
          style={{ margin: '5px', padding: '10px', fontSize: size }}
          onClick={() => flagChange ? changeAllSize(size) : onSizeChange(size)}>A </button>
      ))}
    </div>
  );
}

export default Size;
