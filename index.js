function knightMoves(x, y) {
    if (x < 0 || x > 7 || y < 0 || y > 7) {
        return 'Invalid input';
    }
    let initialPosition = [x, y];
    let moves = [];
    let possibleMoves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2]
    ];
    for (let i = 0; i < possibleMoves.length; i++) {
        if (possibleMoves[i][0] >= 0 && possibleMoves[i][0] <= 7 && possibleMoves[i][1] >= 0 && possibleMoves[i][1] <= 7) {
            moves.push(possibleMoves[i]);
        }
    }
    return printChessBoard(chessBoard(moves, initialPosition));
}

function chessBoard(moves, initialPosition) {
    let chessBoard = [];
    for (let i = 0; i < 8; i++) {
        chessBoard[i] = [];
        for (let j = 0; j < 8; j++) {
            chessBoard[i][j] = ' 0 ';
        }
    }
    for (let i = 0; i < moves.length; i++) {
        chessBoard[moves[i][0]][moves[i][1]] = ' \u265E ';
    }
    chessBoard[initialPosition[0]][initialPosition[1]] = ' \u2658 ';
    return chessBoard;
}

function printChessBoard(chessBoard) {
    let result = '';
    result += '\n';
    for (let i = 0; i < chessBoard.length; i++) {
        for (let j = 0; j < chessBoard[i].length; j++) {
            result += chessBoard[i][j] + ' ';
        }
        result += '\n\n';
    }
    return result;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter the position of the Knight on the chessboard(separate the coordinates using comma(,)): ', (answer) => {
    let userInputArray = answer.split(',');
    let x = parseInt(userInputArray[0]);
    let y = parseInt(userInputArray[1]);
    console.log(knightMoves(x, y));
    rl.close();
});
