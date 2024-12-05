export default function screen({ listChar, flagChange }) {
   return (<div className="screen">{(listChar.map((myChar, index) =>
      < span key={index} style={myChar.state.getStyle(flagChange)}>{myChar.char}</span >
   ))}</div>)
}