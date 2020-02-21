function bombNumbers(sequence, bombAndPower) {
    let [targetNumber, power] = bombAndPower;
    // let targetNumber = bombAndPower[0];
    // let power = bombAndPower[1];
    let sum = 0;

    for (let i = 0; i < sequence.length; i++) {
        const currentNum = sequence[i];

        if (currentNum === targetNumber) {
            let start = Math.max(0, i - power);
            let end = Math.min(i + power, sequence.length - 1);

            for (let j = start; j <= end; j++) {
                sequence[j] = 0;
            }
        }
    }

    for (const amount of sequence) {
        sum += amount;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);