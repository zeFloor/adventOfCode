let listOfLines = []
let input = []
let arrMatrix = new Array(999)

class Input {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
        this.startPointY = 0
        this.startPointX = 0
        this.direction = ''
        this.lineLength = 0
    }

    checkDirection() {
        if(this.x1 === this.x2) 
            this.direction = 'horizontal'
        else if(this.y1 === this.y2) 
            this.direction = 'vertical'
    }

    checkLength() {
        if(this.direction === 'vertical') {
            this.lineLength = Math.abs(this.x1 - this.x2)
        }
    }

    checkStartPoint() {
        if(this.direction === 'vertical') {
            this.startPointY = this.y1
            this.startPointX = Math.min(this.x1, this.x2)
        }
        else if(this.direction === 'horizontal') {
            this.startPointY = this.x1
            this.startPointX = Math.min(this.y1, this.y2)
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
            listOfLines[counter].checkStartPoint()
            counter++
        }
    }
}

function createArrMatrix() {
    for(let i = 0; i < arrMatrix.length; i++) {
        arrMatrix[i] = new Array(1000)
    }
    for(let i = 0; i < arrMatrix.length; i++) {
        for(let k = 0; k < arrMatrix.length; k++) {
            arrMatrix[i][k] = 0
        }
    }
}

function layingPipes(arr) {
    for(let i = 0; i < arr.length; i++) {

    }
}