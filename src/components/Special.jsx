import React from 'react';

function Special({ onToggleBold, onToggleUnderline, isBold, isUnderlined, clearAll, changeAll, flagChange, changeAllSpecial, undo }) {
  return (
    <div className='style'>
      {isBold == 'bold' ? <button onClick={() => flagChange ? changeAllSpecial('normal') : onToggleBold('normal')} style={{ fontWeight: 'bold' }}>  B</button>
        : <button onClick={() => flagChange ? changeAllSpecial('bold') : onToggleBold('bold')} style={{ fontWeight: 'normal' }}> B</button>}
      {isUnderlined == 'underline' ? <button onClick={() => flagChange ? changeAllSpecial('none') : onToggleUnderline('none')} style={{ fontWeight: 'bold', textDecoration: 'underline' }}> U </button>
        : <button onClick={() => { flagChange ? changeAllSpecial('underline') : onToggleUnderline('underline') }} style={{ textDecoration: 'underline' }}> U</button>}
      <button onClick={clearAll} > <img src="img\clearAll.png" alt="garbage" height={19.8} /></button>
      <button onClick={changeAll}> choose all</button>
      <button onClick={undo}>undo</button>
    </div>
  );
}

export default Special;
