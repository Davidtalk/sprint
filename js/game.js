'use strict'

console.log('sprint 1, mine sweeper')
const WALL = ''
const CELL_UNREVEAL = ' '
const EMPTY = ' 2'

var gFlag = '🚩'
    //'<img src="img/flag.png">'
    //var gMine = '💣'


var gBoard = {
    score: 0,
    isShown: true

}

function initGame() {
    console.log('hello')
    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')
    gBoard.isShown = true
}

function buildBoard() {
    var SIZE = 4;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = CELL_UNREVEAL;
        }

    }
    countNegs()
    board[1][0] = MINE
    board[3][2] = MINE
    return board
}

function countNegs(cellI, cellJ, mat) {
    var negsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j > mat[i].length - 1) continue;
            if (i === cellI && j === cellJ) continue;

            if (mat[i][j]) negsCount++;
            console.log(negsCount)
        }
    }
    return negsCount;
}

function cellClicked(elCell, i, j) {
    var elCell = document.querySelector('td')
    if (clickedCell === i && clickedCell === j) {
        elCell.style.backgroundColor = 'darkgreen'
            //gCountScore
    }
}









// function updateScore(diff) {
//     gGame.score += diff;
//     document.querySelector('h2 span').innerText = gGame.score
// }

// function gameOver() {
//     console.log('Game Over');

//     gGame.isOn = false;
//     toggleModel('block')
//     clearInterval(gIntervalGhosts)

// }

// function restarGame() {
//     init()
//     toggleModel('none')

// }