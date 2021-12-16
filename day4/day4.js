class Board {
    constructor(r1,r2,r3,r4,r5) {
        this.row = [r1, r2, r3, r4, r5]
        this.sum = 0
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
        let answer = result(bingo(bingoNumbers, bingoBoards))
        console.log(answer)

    },false)   
    if(file) {
        reader.readAsText(file) 
    }
}


function bingo(numbers, boards) {
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

function result(arr) {
    console.log(arr)
    bingoBoards[arr[1]].numberSum()
    return arr[0] * bingoBoards[arr[1]].sum
}