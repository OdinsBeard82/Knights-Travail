// Chessboard and Knight
class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }

  const possibleMoves = [
    [-2, 1], 
    [-1, 2], 
    [1, 2], 
    [2, 1],
    [2, -1], 
    [1, -2], 
    [-1, -2], 
    [-2, -1]
];
  
// adds chessboard to HTML element
const chessboard = document.getElementById('chessboard');

let knightPosition = new Node({ row: 0, col: 1 });
let knightPosition2 = new Node({ row: 0, col: 6 });


// adds an event listener to the document's "DOMContentLoaded" event.
document.addEventListener('DOMContentLoaded', function () {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            // creates a new HTML div element that will represent a single chess square on the grid.
            const chessSquare = document.createElement('div');
            // This assigns the CSS class name "chess-square" to the created div element.
            chessSquare.className = 'chess-square';
            //even number equals coloured chess-square
            if ((x + y) % 2 === 0) {
                chessSquare.style.backgroundColor = '#855E42';
            }
            //  this line appends the newly created chess square div element to the chessboard element.
            chessboard.appendChild(chessSquare);
        }
    }
   

    function addKnight() {

        // Create image element.
        const knightImg = document.createElement('img');
        // Assign image source.
        knightImg.src = 'knight.jpg';
        // Set CSS class for styling.
        knightImg.className = 'knight-piece';
    
        // Append the knight image to the current knight position on the chessboard.
        chessboard.children[knightPosition.value.row * 8 + knightPosition.value.col].appendChild(knightImg);

    }    

    addKnight();

    function addKnight2() {

        // Create image element.
        const knightImg = document.createElement('img');
        // Assign image source.
        knightImg.src = 'knight.jpg';
        // Set CSS class for styling.
        knightImg.className = 'knight-piece';
    
        // Append the knight image to the current knight position on the chessboard.
        chessboard.children[knightPosition2.value.row * 8 + knightPosition2.value.col].appendChild(knightImg);

    }    

    addKnight2();

    function convertToIndex(position) {
        return position.row * 8 + position.col;
    }


    function minKnightMoves(possibleMoves, start, end) {
        const startIndex = convertToIndex(start);
        const endIndex = convertToIndex(end);
        let queue = [startIndex];
        let prev = {[startIndex]: null};

        while (queue.length > 0) {
            let currIndex = queue.shift();
            let currPosition = { row: Math.floor(currIndex / 8), col: currIndex % 8 };

            if (currIndex === endIndex) {
                let path = [];
                while (currIndex !== null) {
                    path.unshift(currPosition);
                    currIndex = prev[currIndex];
                    currPosition = { row: Math.floor(currIndex / 8), col: currIndex % 8 };
                }
                console.log("Shortest path:", path);
                console.log(path.length);
                return path;
            }
            for (let move of possibleMoves) {
                const newRow = currPosition.row + move[0];
                const newCol = currPosition.col + move[1];
                const newPosition = { row: newRow, col: newCol };
                const newIndex = convertToIndex(newPosition);

                if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8 && !(newIndex in prev)) {
                    prev[newIndex] = currIndex;
                    queue.push(newIndex);
                }
            }
        }
    }

    // Call the function to calculate and log the shortest path
    const start = { row: 0, col: 1 };
    const end = { row: 7, col: 7 };
    minKnightMoves(possibleMoves, start, end);

    console.log('Start and end positions', start, end);

});