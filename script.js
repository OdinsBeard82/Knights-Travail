const gameBoard = document.querySelector("gameboard")
const playerDIsplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8

const startPieces = [
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', knight , '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
]

function createBoard() {
    startPieces.forEach((startPiece) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.classList.add('beige')
        gameBoard.append(square)
    })
}

createBoard()
