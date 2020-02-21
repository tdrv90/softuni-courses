function  passwordGuess (arguments) {
    let password = arguments.shift();
    let answer = "Wrong password!";

    if (password == "s3cr3t!P@ssw0rd") {
        answer = "Welcome"
    }

    console.log(answer);
}

passwordGuess(['s3cr3t!P@ssw0rd']);
passwordGuess(['s3cr3t!P@sswe4324320rd']);