class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
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

const chessboard = document.getElementById('chessboard');

let knightPosition = new Node([0, 0]);

document.addEventListener('DOMContentLoaded', function () {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const chessSquare = document.createElement('div');
            chessSquare.className = 'chess-square';
            if ((x + y) % 2 === 0) {
                chessSquare.style.backgroundColor = '#855E42';
            }
            chessboard.appendChild(chessSquare);
        }
    }

    function addKnight(position) {
        const knightImg = document.createElement('img');
        knightImg.src = 'knight.jpg';
        knightImg.className = 'knight-piece';
        chessboard.children[position.value[0] * 8 + position.value[1]].appendChild(knightImg);
    }

    addKnight(knightPosition);

    function convertToIndex(position) {
        return position[0] * 8 + position[1];
    }

    function highlightPath(path) {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < path.length) {
                const currentPos = path[index];

                // Add the knight to the current position
                addKnight(new Node(currentPos));

                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 1000); // Adjust the delay (in milliseconds) between moves as needed
    }

    function moveKnightOneStep(path) {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < path.length - 1) {
                const currentPos = path[index];
                const nextPos = path[index + 1];

                // Remove the knight from the current position
                chessboard.children[convertToIndex(currentPos)].innerHTML = '';

                // Update the knight's position
                knightPosition.value = nextPos;

                // Add the knight to the new position
                addKnight(new Node(nextPos));

                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 1000); // Adjust the delay (in milliseconds) between moves as needed
    }

    function addClickListeners() {
        const chessSquares = document.querySelectorAll('.chess-square');
        chessSquares.forEach(square => {
            square.addEventListener('click', () => handleSquareClick(square));
        });
    }

    function handleSquareClick(square) {
        document.querySelectorAll('.chess-square').forEach(s => s.classList.remove('selected', 'highlight'));

        const clickedIndex = Array.from(chessboard.children).indexOf(square);
        const clickedPosition = [Math.floor(clickedIndex / 8), clickedIndex % 8];

        square.classList.add('selected');

        const shortestPath = knightMoves(knightPosition.value, clickedPosition);
        moveKnightOneStep(shortestPath);
        console.log("Shortest Path:", shortestPath);
    }

    addClickListeners();

    // Function to find the shortest path using breadth-first search
    function knightMoves(start, end) {
        const queue = [new Node(start)];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length > 0) {
            const currentNode = queue.shift();

            if (currentNode && currentNode.value[0] === end[0] && currentNode.value[1] === end[1]) {
                let path = [];
                let current = currentNode;
                while (current !== null) {
                    path.unshift(current.value);
                    current = current.parent;
                }
                return path;
            }

            for (let move of possibleMoves) {
                const newRow = currentNode.value[0] + move[0];
                const newCol = currentNode.value[1] + move[1];
                const newPosition = [newRow, newCol];

                if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8 && !visited.has(newPosition.toString())) {
                    const newNode = new Node(newPosition);
                    newNode.parent = currentNode;
                    queue.push(newNode);
                    visited.add(newPosition.toString());
                }
            }
        }
    }
});