//Functio to convert array ccordinates to chess coordinates (A1, B2, etc)
function convertToChessCoordinates(x, y) {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return letters[x] + (y + 1);
}

//Functio to convert chess coordinates to array coordinates (A1, B2, etc)
function convertToArrayCoordinates(chessCoordinates) {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var x = letters.indexOf(chessCoordinates[0]);
    var y = parseInt(chessCoordinates[1]) - 1;
    return [x, y];
}

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
            chessBoard[i][j] = ' - ';
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
    result += '    A   B   C   D   E   F   G   H\n';
    result += '\n';
    for (let i = 0; i < chessBoard.length; i++) {
        result += (i + 1) + '  ';
        for (let j = 0; j < chessBoard[i].length; j++) {
            result += chessBoard[j][i] + ' ';
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


rl.question('Enter the position of the Knight on the chessboard(A2, D4, E7 etc): ', (answer) => {
    console.log(knightMoves(...convertToArrayCoordinates(answer)));
    rl.close();
});
