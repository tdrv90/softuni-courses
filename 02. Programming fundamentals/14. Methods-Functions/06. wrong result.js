function wrongResult(firstNum, secondNum, thirdNum) {
    let a = Number(firstNum);
    let b = Number(secondNum);
    let c = Number(thirdNum);
    let result = "";

    if (a >= 0 && b >= 0 && c >= 0) { // +++
        result = 'Positive';
    } else if (a <= 0 && b > 0 && c >= 0) { // -++
        result = 'Negative';
    } else if (a >= 0 && b <= 0 && c >= 0) { // +-+
        result = 'Negative';
    } else if (a >= 0 && b >= 0 && c <= 0) { // ++-
        result = 'Negative';
    } else if (a <= 0 && b <= 0 && c >= 0) { //--+
        result = 'Positive';
    } else if (a <= 0 && b >= 0 && c <= 0) { // -+-
        result = 'Positive';
    } else if (a >= 0 && b <= 0 && c <= 0) { // +--
        result = 'Positive';
    } else if (a <= 0 && b == 0 && c >= 0) { // -0+
        result = 'Positive';
    } else if (a <= 0 && b <= 0 && c <= 0) { // ---
        result = 'Negative';
    }
    console.log(result);
}

// wrongResult(5, 12, -15);
// wrongResult(-6, -12, 14);
// wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);