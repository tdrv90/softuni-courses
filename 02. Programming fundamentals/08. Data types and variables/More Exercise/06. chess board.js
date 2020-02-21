function chessBoard(n) {
    console.log(`<div class="chessboard">`);
    for (let k = 1; k <= n; k++) {
        console.log(`  <div>`);
        if (k % 2 == 1) {
            for (let j = 1; j <= n; j++) {

                if (j % 2 == 1) {
                    console.log(`    <span class="black"></span>`);
                } else {
                    console.log(`    <span class="white"></span>`)
                }
            }
        } else if (k % 2 == 0) {
            for (let j = 1; j <= n; j++) {
                if (j % 2 == 1) {
                    console.log(`    <span class="white"></span>`);
                } else {
                    console.log(`    <span class="black"></span>`)
                }
            }
        }
        console.log(`  </div>`);
    }

    console.log(`</div>`);
}


chessBoard(4);

