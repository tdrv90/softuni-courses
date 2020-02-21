function matchSubstitutions(arguments) {
    let K = Number(arguments.shift());
    let L = Number(arguments.shift());
    let M = Number(arguments.shift());
    let N = Number(arguments.shift());

    let counter = 1;

    for (let num1_1 = K; num1_1 <= 8; num1_1++) {
        for (let num1_2 = 9; num1_2 >= L; num1_2--) {
            for (let num2_1 = M; num2_1 <= 8; num2_1++) {
                for (let num2_2 = 9; num2_2 >= N; num2_2--) {
                    if (num1_1 % 2 == 0 && num1_2 % 2 != 0 && num2_1 % 2 == 0 && num2_2 % 2 != 0) {
                        if (counter <= 6) {
                            if (num1_1 == num2_1 && num1_2 == num2_2) {
                                console.log(`Cannot change the same player.`);
                            } else {
                                console.log(`${num1_1}${num1_2} - ${num2_1}${num2_2}`);
                                counter++;
                            }
                        }
                    }
                }
            }
        }
    }
}


// matchSubstitutions([7, 6, 8, 5]);
matchSubstitutions([6, 7, 5, 6]);


// ДА СИ ВИДИШ ВХОДА В JUDGE:
function test(input) {
    console.log(input);
}