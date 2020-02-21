function passwordLogin(arguments) {
    let username = arguments.shift();
    let password = username.split("").reverse().join("");

    let attempts = 0;
    let falseAttempts = 0;
    while (attempts < 4) {
        let inputPassword = arguments.shift();

        if (inputPassword == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (falseAttempts == 3) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
                falseAttempts++;
            }
        }
        attempts++;
    }
}

passwordLogin(['Acer', 'login', 'go', 'let me in', 'recA']);
// passwordLogin(['momo','omom']);
passwordLogin(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
