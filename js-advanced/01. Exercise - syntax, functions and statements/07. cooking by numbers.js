function cookingByNumbers(input) {
    let number = Number(input.shift());

    for (const cmd of input) {
        if (cmd === "chop") {
            number = chop(number);
            console.log(number);
        } else if (cmd === "dice") {
            number = dice(number);
            console.log(number);
        } else if (cmd === "spice") {
            number = spice(number);
            console.log(number);
        } else if (cmd === "bake") {
            number = bake(number);
            console.log(number);
        } else if (cmd === "fillet") {
            number = fillet(number);
            console.log(number);
        }
    }


    function chop(n) {
        return n / 2;
    }
    function dice(n) {
        return Math.sqrt(n);
    }
    function spice(n) {
        return n + 1;
    }
    function bake(n) {
        return n * 3;
    }
    function fillet(n) {
        return n - (n * 0.20);
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
// 16
// 8
// 4
// 2
// 1

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
// 3
// 4
// 2
// 6
// 4.8