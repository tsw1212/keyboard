import React from 'react';

function Font({ onFontChange, changeAllFont, flagChange }) {
  const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New'];
  return (
    <div className='style'>
      {fonts.map((font, index) => (
        <button
          key={index}
          style={{ margin: '5px', padding: '10px', fontFamily: font }}
          onClick={() => flagChange ? changeAllFont(font) : onFontChange(font)}
        >Font text</button>
      ))}
    </div>
  );
}

export default Font;
