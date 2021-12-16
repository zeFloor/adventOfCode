class Board {
    constructor(r1,r2,r3,r4,r5) {
        this.row = [r1, r2, r3, r4, r5]
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
            for(let k = 0; k < this.row.length; k++) {
                checkColmn.push(this.row[k][i])
            }
            if(checkColmn.filter(x => x=='o').length == 5)
            return 'BINGO'
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


//parasyti clasese metodus, kurie tikrintu isbrauktus skaicius