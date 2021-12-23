let listOfLines = []
let input = []

class Input {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
        this.startPoint = 0
        this.direction = ''
        this.lineLength = 0
    }

    checkDirection() {
        if(this.x1 === this.x2) {
            this.direction = 'horizontal'
            this.startPoint = this.x1
        }
        else if(this.y1 === this.y2) {
            this.direction = 'vertical'
            this.startPoint = this.y1
        }
    }

    checkLength() {
        if(this.direction === 'vertical') {
            this.lineLength = this.x1 - this.x2
            this.lineLength = Math.abs(this.lineLength)
        }
    }
}


function loadFile() {
    let [file] = document.querySelector('.file').files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        input = reader.result.split('\n').join(' ').split(' -> ').join(' ').split(' ').join(',').split(',')
        
        console.log(input)
}, false)
if(file) {
    reader.readAsText(file)
}
}


function filterLines(arr) {
    let counter = 0
    for(let i = 0; i < arr.length; i = i + 4) {
        if(arr[i] === arr[i+2] || arr[i+1] === arr[i+3]) {
            listOfLines.push(new Input(arr[i], arr[i+1], arr[i+2], arr[i+3]))
            listOfLines[counter].checkDirection()
            listOfLines[counter].checkLength()
            counter++
        }
    }
}
