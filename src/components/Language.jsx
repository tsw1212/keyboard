export default function Language({ language, changeLanguage }) {
    return (
        <div className="style">
            {language !== 'Hebrow' && (
                <button onClick={() => changeLanguage('Hebrow')}>עברית</button>
            )}
            {language !== 'English' && (
                <button onClick={() => { changeLanguage("English") }}>English</button>
            )}
            {language == "English" && (
                <button onClick={() => changeLanguage('EnglishC')}>⇧</button>
            )}
            {language !== 'Emoji' && (
                <button onClick={() => changeLanguage('Emoji')}>😊</button>
            )}
        </div>
    )
}