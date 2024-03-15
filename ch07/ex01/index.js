export function addArray(row, col) {
    let table = new Array(10);
    for(let i = 0; i < table.length; i++) {
        table[i] = new Array(10);
    }

    for (let r = 0; r < table.length; r++) {
        for (let c = 0; c < table[r].length; c++) {
            table[r][c] = r + c;
        }
    }
    return table[row][col];
}

export function multipArray(row, col) {
    let table = new Array(10);
    for(let i = 0; i < table.length; i++) {
        table[i] = new Array(10);
    }

    for (let r = 0; r < table.length; r++) {
        for (let c = 0; c < table[r].length; c++) {
            table[r][c] = r * c;
        }
    }
    return table[row][col];
}

console.log(addArray(5,2));
console.log(multipArray(5,2));
