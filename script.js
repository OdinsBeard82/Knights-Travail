// Chessboard and Knight
class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }

  
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
    

    const possibleMoves = [   
        [-1, 2], 
        [1, 2],
        [-2, 1], 
        [2, 1],
        [-2, -1], 
        [2, -1],
        [-1, -2], 
        [1, -2]
    ];


function minKnightMoves(x, y) {
        // Keeps track of visited positions in BFS search
        const visited = new Map();
        const queue = [[0, 0]]; // Queue now holds coordinates as arrays
        visited.set('0,0', 0); // Set initial position as visited with distance 0
    
        // Continue BFS until the queue is empty
        while (queue.length > 0) {
            const [curX, curY] = queue.shift();
            
            // Check if we've reached the target position
            if (curX === x && curY === y) {
                return visited.get(`${x},${y}`);
            }
            
            for (const [rowOffset, colOffset] of possibleMoves) {
                const nextX = curX + rowOffset;
                const nextY = curY + colOffset;
                const nextKey = `${nextX},${nextY}`;
                
                if (
                    nextX >= -1 && nextY >= -1 && // Allow extra steps to be explored
                    !visited.has(nextKey)
                ) {
                    queue.push([nextX, nextY]);
                    visited.set(nextKey, visited.get(`${curX},${curY}`) + 1);
                    visited.size;
                    visited.get(7,7);
                    
                }

            }
        }
    
        // Target position is unreachable
        return -1;
           
    }



  const button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    button.textContent = `Click count: ${event.detail}`;
  });

  let myKnight= new addKnight();


    const result = minKnightMoves(7, 7); 
    
    console.log(result); // Print the minimum number of moves
    console.log(minKnightMoves(0,1, 2,3,));
    console.log(pathToEnd);
})


