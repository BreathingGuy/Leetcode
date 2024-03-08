var isValidSudoku = function(board) {
        
    for (let i = 0; i < 9; i++) {

        let arr = board[i].filter(a => a != '.');
        let example = new Set(arr);
        if (example.size != arr.length) {
            return false;
        }

        let coloumn = [];
        for (let k = 0; k < 9; k++) {
            coloumn.push(board[k][i])
        }
        arr = coloumn.filter(a => a != '.');
        example = new Set(arr);
        if (example.size != arr.length) {
            return false;
        }
    }

    let tetr = [];
    for (let k = 0; k < 3; k++) {

        for (let j = 0; j < 3; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 0; k < 3; k++) {

        for (let j = 3; j < 6; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 0; k < 3; k++) {

        for (let j = 6; j < 9; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 3; k < 6; k++) {

        for (let j = 0; j < 3; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 3; k < 6; k++) {

        for (let j = 3; j < 6; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 3; k < 6; k++) {

        for (let j = 6; j < 9; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 6; k < 9; k++) {

        for (let j = 0; j < 3; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 6; k < 9; k++) {

        for (let j = 3; j < 6; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 6; k < 9; k++) {

        for (let j = 6; j < 9; j++) {

        tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    return true;

};