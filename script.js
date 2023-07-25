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

        const chessboard = document.getElementById('chessboard');
        let selectedSquare = -1;

        document.addEventListener('DOMContentLoaded', function () {
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

            function moveKnightToSquare(squareIndex) {
                if (selectedSquare !== -1) {
                    chessboard.children[selectedSquare].classList.remove('highlight');
                }

                const knightPosition = map.indexOf('knight');

                // Calculate the row and column for the current position of the knight
                const currentRow = Math.floor(knightPosition / 8);
                const currentCol = knightPosition % 8;

                // Calculate the row and column for the selected square
                const newRow = Math.floor(squareIndex / 8);
                const newCol = squareIndex % 8;

                // Check if the selected square is a valid move for the knight
                const validMoves = [
                    [-1, 2], [1, 2],
                    [-2, 1], [2, 1],
                    [-2, -1], [2, -1],
                    [-1, -2], [1, -2]
                ];

                const isValidMove = validMoves.some(move => move[0] === newRow - currentRow && move[1] === newCol - currentCol);

                if (isValidMove) {
                    // Remove the knight from the current position
                    chessboard.children[knightPosition].innerHTML = '';

                    // Update the 'map' array with the new knight position
                    map[knightPosition] = 0;
                    map[squareIndex] = 'knight';

                    // Create a new image element for the knight at the new position
                    const knightImg = document.createElement('img');
                    knightImg.src = 'knight.jpg';
                    knightImg.className = 'knight-piece';
                    chessboard.children[squareIndex].appendChild(knightImg);

                    selectedSquare = squareIndex;
                }
            }

            function addPiece() {
                // Get the position of the knight from the map array
                const knightPosition = map.indexOf('knight');

                // Create a new image element for the knight
                const knightImg = document.createElement('img');
                knightImg.src = 'knight.jpg';
                knightImg.className = 'knight-piece';
                chessboard.children[knightPosition].appendChild(knightImg);
            }

            function knightChoice() {
                const chessSquares = document.getElementsByClassName('chess-square');

                for (let i = 0; i < chessSquares.length; i++) {
                    chessSquares[i].addEventListener('click', function () {
                        chessSquares[i].classList.add('highlight');
                        moveKnightToSquare(i);

                        setTimeout(function () {
                            chessSquares[i].classList.remove('highlight');
                        }, 1000);
                        
                    });
                }
            }

            addPiece();
            knightChoice();
        });