class Board {
    constructor(r1,r2,r3,r4,r5) {
        this.row = [r1, r2, r3, r4, r5]
        this.sum = 0
        this.wonOn = 0
    }

    checkRows() {
        for(let i = 0; i < this.row.length; i++) {
            if(this.row[i].filter(x => x=='o').length == 5)
            return 'BINGO'
        }
    }

    checkColumns() {
        for(let i = 0; i < this.row.length; i++) {
            let checkColmn = []
            for(let k = 0; k < this.row[0].length; k++) {
                checkColmn.push(this.row[k][i])
            }
            if(checkColmn.filter(x => x=='o').length == 5)
            return 'BINGO'
        }
    }

    checkNumber(numb) {
        for(let i = 0; i < this.row.length; i++) {
            for(let k = 0; k < this.row[0].length; k++) {
                if(this.row[i][k] == numb) 
                this.row[i][k] = 'o'
            }
        }
    }

    numberSum() {
        for(let i = 0; i < this.row.length; i++) {
            for(let k = 0; k < this.row[0].length; k++) {
                if(this.row[i][k] != 'o') {
                    this.sum += parseInt(this.row[i][k])
                }
            }
        }
    }
}

let bingoBoards = []
let bingoNumbers = []

// Scanning a file making objects out of boards and putting them in array(bingoBoards), bingo numbers to a seperate array(bingoNumbers)

function partOne() {
    let [file] = document.querySelector(".part1").files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        let input = reader.result.split('\n\n')
        bingoNumbers = input[0].split(',')

        for(let i = 1; i < input.length; i++) {
            let board = input[i].split('\n')
            for(let k = 0; k < board.length; k++) {
                board[k] = board[k].split(' ')
                for(let j = 0; j < board[k].length; j++) {
                    if(board[k][j] == '')
                    board[k].splice(j, 1)
                }
            }
            bingoBoards.push(new Board(board[0], board[1], board[2], board[3], board[4]))
        }

    },false)   
    if(file) {
        reader.readAsText(file) 
    }
}

function bingoFirst(numbers, boards) {
    for(let i = 0; i < numbers.length; i++) {
        for(let k = 0; k < boards.length; k++) {
            boards[k].checkNumber(numbers[i])
            if(boards[k].checkRows() == 'BINGO') {
                return [numbers[i], k]
            } else if (boards[k].checkColumns() == 'BINGO') {
                return [numbers[i], k]
            }
        }
    }
}

function resultFirst(arr) {
    bingoBoards[arr[1]].numberSum()
    console.log(arr[0] * bingoBoards[arr[1]].sum)
}

//------------------------------------------------------- Part 2 -------------------------------------------------

function bingoLast(numbers, boards) {
    for(let i = 0; i < numbers.length; i++) {
        for(let k = 0; k < boards.length; k++) {
            if(boards[k].wonOn > 0) {
                continue
            } else {
            boards[k].checkNumber(numbers[i])
            if(boards[k].checkRows() == 'BINGO') 
                boards[k].wonOn = i
            else if (boards[k].checkColumns() == 'BINGO')
                boards[k].wonOn = i
            }
        }
    }
}

function findLastWinner(boards) {
    let last = boards[0].wonOn
    let lastBoard = 0
    for(let i = 1; i < boards.length; i++) {
        if(boards[i].wonOn > last) {
            last = boards[i].wonOn
            lastBoard = i
        }
    }
    return [last, lastBoard]
}

function resultLast(arr) {
    bingoBoards[arr[1]].numberSum()
    console.log(bingoNumbers[arr[0]] * bingoBoards[arr[1]].sum)
}