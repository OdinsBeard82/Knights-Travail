var chessboard = document.getElementById('chessboard');
for (var i = 0; i < 8; i++) {
   for (var j = 0; j < 8; j++) {
      var chessSquare = document.createElement('div');
      chessSquare.className = 'chess-square';
      if ((i + j) % 2 == 0) {
         chessSquare.style.backgroundColor = '#000';
      }
      chessboard.appendChild(chessSquare);
   }
}

function addPiece () {
    const img = document.querySelector("image");
    img.src = (knight.jpg);
    document.body.appendChild(img);
}

var initialPieces = {
    position: 40, color: 'black' typeof
}
