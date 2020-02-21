function invalidNumber (arguments) {
    let nr = Number(arguments.shift());

    if (!((nr >= 100 && nr <= 200) || nr == 0)) {
        console.log("invalid");
    }
}

invalidNumber([75]);
invalidNumber([150]);
invalidNumber([220]);
invalidNumber([199]);
invalidNumber([-1]);
invalidNumber([100]);
invalidNumber([200]);
invalidNumber([0]);