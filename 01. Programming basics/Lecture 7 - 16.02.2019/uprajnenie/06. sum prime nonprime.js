function sumPrimeNonPrimeNumbers(arguments) {
    let command = arguments.shift();

    let sumPrime = 0;
    let sumNonPrime = 0;


    while (command != "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
        }

        let isPrime = true;
        if (num == 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= 9; i++) {
                if (num % i == 0 && i != num) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime == true && num > 0) {
            sumPrime += num;
        } else if (isPrime == false && num > 0) {
            sumNonPrime += num;
        }

        command = arguments.shift();
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrimeNumbers([3, 9, 0, 7, 19, 4, "stop"]);
sumPrimeNonPrimeNumbers([30, 83, 33, -1, 20, "stop"]);
sumPrimeNonPrimeNumbers([0, -9, 0, "stop"]);