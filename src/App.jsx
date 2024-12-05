import React from 'react';
import { useState } from 'react';
import Keyboard from './components/keyboard/Keyboard'
import { MyState } from './class/State'
import { myChar } from './class/Char'
import { MyEvent } from './class/Event';
import Color from './components/Color'
import Screen from './components/Screen'
import Size from './components/Size';
import Font from './components/font';
import Special from './components/Special';
import Language from './components/Language';

let arrStatus = new MyState();
let listEvent = [];
function App() {

  const [language, setLanguage] = useState("Hebrow");
  const [listChar, setListChar] = useState([new myChar()]);
  const [flagChange, setFlagChange] = useState(false);
  return (
    <div className='allPage'>
      <Screen listChar={listChar} flagChange={flagChange} />
      <Color onColorChange={onColorChange} flagChange={flagChange} changeAllColor={changeAllColor} />
      <Size onSizeChange={onSizeChange} flagChange={flagChange} changeAllSize={changeAllSize} />
      <Language language={language} changeLanguage={changeLanguage} />
      <Font onFontChange={onFontChange} flagChange={flagChange} changeAllFont={changeAllFont} />
      <Special onToggleBold={onToggleBold} onToggleUnderline={onToggleUnderline} isBold={arrStatus.bold}
        isUnderlined={arrStatus.underline} clearAll={clearAll} changeAll={changeAll} flagChange={flagChange} changeAllSpecial={changeAllSpecial} undo={undo} />
      <Keyboard clickLetter={clickLetter} clickDelete={clickDelete} clickSpace={clickSpace} language={language} />
    </div>
  )

  function clickLetter(letter) {
    let newState = new MyState(arrStatus.font, arrStatus.color, arrStatus.size, arrStatus.backgroundColor, arrStatus.underline, arrStatus.bold);
    listEvent.push(new MyEvent("char", ""));
    setListChar(preListChar => preListChar.concat(new myChar(letter, newState)));
  }

  function clickDelete() {
    listEvent.push(new MyEvent("Delete", listChar[listChar.length]));
    setListChar(preListChar => preListChar.slice(0, preListChar.length - 1));
  }

  function clickSpace() {
    listEvent.push((new MyEvent("space", " ")));
    setListChar(preListChar => preListChar.concat(new myChar(" ", arrStatus)))
  }

  function clearAll() {
    listEvent.push(new MyEvent("clearAll", Object.assign(listChar)));
    setListChar(preListChar => preListChar.slice(0, 1))
  }

  function changeAll() {
    listEvent.push(new MyEvent("changeAll", listChar));
    setFlagChange(true);
  }

  function changeLanguage(myLanguage) {
    listEvent.push(new MyEvent("language", language))
    setLanguage(myLanguage);
  }

  function changeAllColor(myColor) {
    setFlagChange(false);
    const newListChar = listChar.map((myChar1) => new myChar(myChar1.char, new MyState(myChar1.state.font, myChar1.state.color, myChar1.state.size, myChar1.state.backgroundColor, myChar1.state.underline, myChar1.state.bold)))
    newListChar.forEach(char => char.state.color = myColor);
    setListChar(newListChar);
  }

  function changeAllSize(mySize) {
    setFlagChange(false);
    const newListChar = listChar.map((myChar1) => new myChar(myChar1.char, new MyState(myChar1.state.font, myChar1.state.color, myChar1.state.size, myChar1.state.backgroundColor, myChar1.state.underline, myChar1.state.bold)))
    newListChar.forEach(char => char.state.size = mySize)
    setListChar(newListChar)
  }

  function changeAllFont(myFont) {
    setFlagChange(false);
    const newListChar = listChar.map((myChar1) => new myChar(myChar1.char, new MyState(myChar1.state.font, myChar1.state.color, myChar1.state.size, myChar1.state.backgroundColor, myChar1.state.underline, myChar1.state.bold)))
    newListChar.forEach(char => char.state.font = myFont)
    setListChar(newListChar)
  }

  function changeAllSpecial(mySpecial) {
    setFlagChange(false);
    const newListChar = listChar.map((myChar1) => new myChar(myChar1.char, new MyState(myChar1.state.font, myChar1.state.color, myChar1.state.size, myChar1.state.backgroundColor, myChar1.state.underline, myChar1.state.bold)));
    (mySpecial == "bold" || mySpecial == "normal") ?
      newListChar.forEach(char => char.state.bold = mySpecial) :
      newListChar.forEach(char => char.state.underline = mySpecial);
    setListChar(newListChar)
  }

  function undo() {
    let currentEvent = listEvent.pop()
    if (currentEvent != null) {
      if (currentEvent.event == "color")
        arrStatus.color = currentEvent.params;
      else if (currentEvent.event == "font")
        arrStatus.font = currentEvent.params;
      else if (currentEvent.event == "size")
        arrStatus.size = currentEvent.params;
      else if (currentEvent.event == "bold")
        arrStatus.bold = currentEvent.params;
      else if (currentEvent.event == "underline")
        arrStatus.underline = currentEvent.params;
      else if (currentEvent.event == "char" || currentEvent.event == "space")
        setListChar(preListChar => preListChar.slice(0, preListChar.length - 1));
      else if (currentEvent.event == "Delete")
        setListChar(preListChar => preListChar.concat(currentEvent.params))
      else if (currentEvent.event == "changeAll" || currentEvent.event == "clearAll")
        setListChar(currentEvent.params);
      else if (currentEvent.event == "language")
        setLanguage(currentEvent.params);
    }

  }

  function onColorChange(myColor) {
    listEvent.push(new MyEvent("color", Object.assign(arrStatus.color)));
    arrStatus.color = myColor;
  }

  function onSizeChange(mySize) {
    listEvent.push(new MyEvent("size", arrStatus.size));
    arrStatus.size = mySize;
  }

  function onFontChange(myFont) {
    listEvent.push(new MyEvent("font", arrStatus.font));
    arrStatus.font = myFont;
  }

  function onToggleBold(myBold) {
    listEvent.push(new MyEvent("bold", Object.assign(arrStatus.bold)));
    arrStatus.bold = myBold;
  }

  function onToggleUnderline(myUnderline) {
    listEvent.push(new MyEvent("underline", Object.assign(arrStatus.underline)));
    arrStatus.underline = myUnderline;
  }
}


export default App

