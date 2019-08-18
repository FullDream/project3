class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    CreateDiv() {
        let d = document.createElement('div');
        document.body.appendChild(d);
        d.textContent = 'Какой либо текст';
        d.style.cssText = `height : ${this.height}px; width : ${this.width}px; background : ${this.bg}; fontSize: ${this.fontSize}px; textAlign : ${this.textAlign}px`;
        // d.style.height = this.height;
        // d.style.width = this.width;
        // d.style.bg = this.bg;
        // d.style.fontSize = this.fontSize;
        // d.style.textAlign = this.textAlign;
    }

}
const newDiv = new Options(100, 200, "red", 25, "center");

newDiv.CreateDiv();
