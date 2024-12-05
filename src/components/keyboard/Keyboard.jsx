import './keyboardStyle.css'

const charactersString = ',.;?!@#*()"-';
const charactersArray = charactersString.split('');
const keyboardHebrow = [

    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א",
];
const keyboardEnglishCapital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const keyboardEnglish = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
const keyboardEmojis = [
    "😀", // smile
    "😃", // grin
    "😄", // laugh
    "😁", // big grin
    "😆", // laughing
    "😅", // sweating
    "🤣", // rolling on the floor laughing
    "😂", // laughing with tears
    "🙂", // slightly smiling
    "🙃", // upside down smile
    "😉", // winking
    "😊", // smiling with smiling eyes
    "😇", // halo
    "😍", // heart eyes
    "😘", // blowing a kiss
    "😗", // kissing
    "😙", // kissing with smiling eyes
    "😚", // kissing with closed eyes
    "😋", // tasting something good
    "😛", // sticking out tongue
    "😝", // winking and sticking out tongue
    "😜", // winking and sticking out tongue with tongue curled
];
const numbersArray = [];
for (let i = 0; i < 10; i++) {
    numbersArray.push(i);
}

export default function Keyboard({ language, clickLetter, clickSpace, clickDelete }) {
    let Keyboard;
    let languageKeyboard = checkLanguage(language)
    Keyboard = languageKeyboard.map((letter, index) => <button className="char " onClick={() => { clickLetter(letter) }} key={index}> {letter}</button>);
    let charKeyboard = charactersArray.map((tav, index) =><button className="char characters" onClick={() => { clickLetter(tav) }} key={index + 200}>{tav}</button>);
    let btnDelete = <button className="char delete" onClick={() => { clickDelete() }} key={99}>< img src="img\delet.png" width={'20vw'} /></button>;
    let btnSpace = <button className="char space" onClick={() => { clickSpace() }} >{"            "}</button>;
    let nubersKeyboard = numbersArray.map((tav, index) => <button className="char number" onClick={() => { clickLetter(tav) }} key={index + 100}> {tav}</button>);
    return (
        <div className="Keyboard">
            <div className='keyboardNum'>{language !== 'Emoji' && (nubersKeyboard)}</div>
            <div >{language !== 'Emoji' && (charKeyboard)}</div>
            <div>{Keyboard} {btnDelete}</div>
            <div>{btnSpace}</div>
        </div>
    );
}

function checkLanguage(language) {
    if (language == "Hebrow")
        return keyboardHebrow;
    else if (language == "EnglishC")
        return keyboardEnglishCapital
    else if (language == "English")
        return keyboardEnglish
    else if (language == "Emoji")
        return keyboardEmojis
}
