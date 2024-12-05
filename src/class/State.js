export class MyState {
    constructor(font = "", color = "black", size = 22, backgroundColor = "white",underline = 'none', bold = 'normal') {
        this.font = font
        this.color = color;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.underline = underline;
        this.bold = bold;
    }
    
    getStyle = function getStyle(flagChange) {
        const style = {
            fontFamily: this.font,
            color: this.color,
            fontSize: `${this.size}px`,
            backgroundColor: flagChange ? "#ffc2c2" : this.backgroundColor,
            textDecoration: this.underline == 'underline' ? 'underline' : 'none',
            fontWeight: this.bold == 'bold' ? 'bold' : 'normal'
        }
        return style;

    }
}


