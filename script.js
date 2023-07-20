document.addEventListener('DOMContentLoaded', function () {
    const chessboard = document.getElementById('chessboard');
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const chessSquare = document.createElement('div');
            chessSquare.className = 'chess-square';
            if ((i + j) % 2 == 0) {
                chessSquare.style.backgroundColor = '#000';
            }
            chessboard.appendChild(chessSquare);
        }
    }

    const map = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 'knight', 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,   
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
    ];

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
