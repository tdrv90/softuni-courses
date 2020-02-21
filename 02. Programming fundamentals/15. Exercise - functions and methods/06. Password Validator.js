function passwordValidator(password) {
    let isBetween6and10Chars = true;
    let countDigits = 0;
    let otherSymbolsCount = 0;

    if (password.length < 6 || password.length > 10) {
        isBetween6and10Chars = false;
    }

    for (let i = 0; i < password.length; i++) {
        let tempChar = password.charCodeAt(i);

        if (tempChar >= 48 && tempChar <= 57) {
            countDigits++;
        }
        if (!(tempChar >= 65 && tempChar <= 90) && !(tempChar >= 97 && tempChar <= 122) && !(tempChar >= 48 && tempChar <= 57)) {
            otherSymbolsCount++;
        }
    }

    if (countDigits >= 2 && otherSymbolsCount === 0 && isBetween6and10Chars === true) {
        console.log('Password is valid');
    } else {
        if (!isBetween6and10Chars) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (otherSymbolsCount > 0) {
            console.log("Password must consist only of letters and digits");
        }

        if (countDigits < 2) {
            console.log("Password must have at least 2 digits");
        }
    }
}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');