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
    
    const possibleMoves = [
        [-1, 2], [1, 2],
        [-2, 1], [2, 1],
        [-2, -1], [2, -1],
        [-1, -2], [1, -2]
    ];

    function moveKnight() {
        const knightPosition = map.indexOf('knight');
    
        // Calculate the row and column for the position
        const row = Math.floor(knightPosition / 8);
        const col = knightPosition % 8;
    
        // Calculate the new position randomly from the possible moves
        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        const newRow = row + randomMove[0];
        const newCol = col + randomMove[1];
    
        // Check if the new position is within the chessboard boundaries
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            // Remove the knight from the current position
            chessboard.children[knightPosition].innerHTML = '';
    
            // Update the 'map' array with the new knight position
            const newPosition = newRow * 8 + newCol;
            map[knightPosition] = 0;
            map[newPosition] = 'knight';
    
            // Create a new image element for the knight at the new position
            const knightImg = document.createElement('img');
            knightImg.src = 'knight.jpg';
            knightImg.className = 'knight-piece';
            chessboard.children[newPosition].appendChild(knightImg);
        }
    }
    

    setInterval(moveKnight, 600);
;
    
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



function knightChoice() {
    const chessSquares = document.getElementsByClassName('chess-square');

    for (let i = 0; i < chessSquares.length; i++) {
        chessSquares[i].addEventListener('click', function () {
            moveKnightToSquare(i);

        });
    }
}


//create button for onclick
//onclick to choose position on board
//find night position
//find all routes to position
//choose shortest route to position
//knight moves to this position



