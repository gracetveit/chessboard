'use strict';

function chessboard (size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        if (i % 2 == 0) {
            for (let i = 0; i < size; i++) {
                if (i % 2 == 0) {
                    row += ' ';
                }
                else {row += '#'}
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                if (i % 2 != 0) {
                    row += ' ';
                }
                else {row += '#'}
        }      
    }
    console.log(row);
    }
}

chessboard(process.argv[2]);