document.addEventListener('DOMContentLoaded', function () {
    const chessboard = document.getElementById('chessboard');
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const chessSquare = document.createElement('div');
            chessSquare.className = 'chess-square';
            if ((x + y) % 2 == 0) {
                chessSquare.style.backgroundColor = '#000';
            }
            chessboard.appendChild(chessSquare);
        }
    }

    const map = [
        0, 'knight', 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,   
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
    ];
    
    const knightsMoves = [
        [-1, 2], [1, 2],
        [-2, 1], [2, 1],
        [-2, -1], [2, -1],
        [-1, -2], [1, -2]
    ];

    function moveKnight() {
        const knightPosition = map.indexOf('knight');

        const row = Math.floor(knightPosition / 8);
        const col = knightPosition %8;

        chessboard.children[knightPosition].innerhtml = '';

        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        const newRow = row + randomMove[0];
        const newCol = col +randomMove[1];

        if (newRow >= 0 && newRow < 8 && newCOl >= 0 && newCol < 8) {
            const newPosition = newRow * 8 + newCol;
            map[newPosition] = 'knight';

            const knightImg = document.createElement('img');
            knightImg.src = 'knight.jpg';
            knightImg.className = 'knght-piece';
            chessboard.children[newPosition].appendchidl(knightImg);
        }

    }

    
 
    

    function addPiece() {
        // Get the position of the knight from the map array
        const knightPosition = map.indexOf('knight');
     
        // Calculate the row and column for the position
        const row = Math.floor(knightPosition / 8);
        const col = knightPosition % 8;
     
        // Create a new image element for the knight
        const knightImg = document.createElement('img');
        knightImg.src = 'knight.jpg';
        knightImg.className = 'knight-piece'; // You can define the 'knight-piece' class in your CSS to add styles to the knight image
        chessboard.children[knightPosition].appendChild(knightImg);
    }    

    addPiece();
});

