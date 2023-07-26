const chessboard = document.getElementById('chessboard');
let knightPosition = {
    row: 8,
    col: 0 
};

class TreeNode {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.left = null;
        this.right = null;
    }
}