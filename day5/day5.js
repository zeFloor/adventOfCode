let listOfLines = []
let input = []
let arrMatrix = new Array(1000)

class Input {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
        this.startPointY = 0
        this.startPointX = 0
        this.endPointX = 0
        this.endPointY = 0
        this.direction = ''
    }

    checkDirection() {
        if(this.x1 === this.x2) 
            this.direction = 'vertical'
        else if(this.y1 === this.y2) 
            this.direction = 'horizontal'
        else if((this.x1 > this.x2 && this.y1 < this.y2) || (this.x1 < this.x2 && this.y1 > this.y2))
            this.direction = 'slash'
        else if((this.x1 < this.x2 && this.y1 < this.y2) || (this.x1 > this.x2 && this.y1 > this.y2))
            this.direction = 'backslash'
    }

    checkStartPoint() {
        if(this.direction === 'vertical') {
            this.startPointX = this.x1
            this.startPointY = Math.min(this.y1, this.y2)
            this.endPointY = Math.max(this.y1, this.y2)
        } else if(this.direction === 'horizontal') {
            this.startPointY = this.y1
            this.startPointX = Math.min(this.x1, this.x2)
            this.endPointX = Math.max(this.x1, this.x2)
        } else if(this.direction === 'slash') {
            this.startPointX = Math.max(this.x1, this.x2)
            this.endPointX = Math.min(this.x1, this.x2)
            this.startPointY = Math.min(this.y1, this.y2)
            this.endPointY = Math.max(this.y1, this.y2)
        } else if(this.direction === 'backslash') {
            this.startPointX = Math.min(this.x1, this.x2)
            this.endPointX = Math.max(this.x1, this.x2)
            this.startPointY = Math.min(this.y1, this.y2)
            this.endPointY = Math.max(this.y1, this.y2)
        }
    }
}


function loadFile() {
    let [file] = document.querySelector('.file').files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        input = reader.result.split('\n').join(' ').split(' -> ').join(' ').split(' ').join(',').split(',')
        for(let i = 0; i < input.length; i++) {
            input[i] = parseInt(input[i])
        }
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
            listOfLines[counter].checkStartPoint()
            counter++
        } else if (Math.abs(arr[i] - arr[i+2]) === Math.abs(arr[i+1] - arr[i+3])) {
            listOfLines.push(new Input(arr[i], arr[i+1], arr[i+2], arr[i+3]))
            listOfLines[counter].checkDirection()
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
        if(arr[i].direction === "horizontal") {
            for(let k = arr[i].startPointX; k <= arr[i].endPointX; k++) {
                arrMatrix[arr[i].startPointY][k]++
            }
        } else if(arr[i].direction === "vertical") {
            for(let k = arr[i].startPointY; k <= arr[i].endPointY; k++) {
                arrMatrix[k][arr[i].startPointX]++
            }
        }
    }
}

function checkAnswer(arr) {
    let counter = 0
    for(let i = 0; i < arr.length; i++) {
        for(let k= 0; k < arr.length; k++) {
            if(arr[i][k] >= 2)
            counter++
        }
    }
    return counter
}

//---------------------- PART 2 ------------------------------

function layingPipesPart2(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].direction === 'slash') {
            let downwards = arr[i].startPointX
            for(let k = arr[i].startPointY; k <= arr[i].endPointY; k++) {
                arrMatrix[k][downwards]++
                downwards--
            }
        } else if(arr[i].direction === 'backslash') {
            let downwards = arr[i].startPointX
            for(let k = arr[i].startPointY; k <= arr[i].endPointY; k++) {
                arrMatrix[k][downwards]++
                downwards++
            }
        }
    }
}