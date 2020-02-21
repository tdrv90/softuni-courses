function matrix(arguments) {
    let nA = Number(arguments.shift());
    let nB = Number(arguments.shift());
    let nC = Number(arguments.shift());
    let nD = Number(arguments.shift());

    for (let row1num1 = nA; row1num1 <= nB; row1num1++) {
        for (let row1num2 = nA; row1num2 <= nB; row1num2++) {
            for (let row2num1 = nC; row2num1 <= nD; row2num1++) {
                for (let row2num2 = nC; row2num2 <= nD; row2num2++) {
                    if ((row1num1 + row2num2 == row1num2 + row2num1) && (row1num1 != row1num2 && row2num1 != row2num2)) {
                        console.log(`${row1num1}${row1num2}`);                        
                        console.log(`${row2num1}${row2num2}`);                        
                        console.log();                        
                    }
                }
            }
        }
    }
}

matrix([1,2,3,4]);