const chessboard = document.getElementById('chessboard');
let knightPosition = {
    row: 8,
    col: 0 
};

class Node {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

function insertNode(root, row, col) {
    const node = this.root; 
    if (node === null) {
        return new Node(row, col);
    
    }

    if (row < root.row || (row === root.row && col < root.col)) {
        root.left = insertNode(root.left, row, col);
    } else {
        root.right = insertNode(root.right, row, col);
    }

    return root;
}


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

});





