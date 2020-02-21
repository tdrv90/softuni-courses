function ticketCombination(arguments) {
    let num = Number(arguments.shift());

    let counter = 0;
    let ticketCombo = "";
    let sum = 0;

    for (let sym1 = 66; sym1 <= 76; sym1++) { // тук може и със стъпка +2
        for (let sym2 = 102; sym2 >= 97; sym2--) {
            for (let sym3 = 65; sym3 <= 67; sym3++) {
                for (let sym4 = 1; sym4 <= 10; sym4++) {
                    for (let sym5 = 10; sym5 >= 1; sym5--) {
                        if (sym1 % 2 == 0) {
                            counter++;
                        }
                        if (counter == num) {
                            sum = sym1 + sym2 + sym3 + sym4 + sym5;
                            ticketCombo = `${String.fromCharCode(sym1)}${String.fromCharCode(sym2)}${String.fromCharCode(sym3)}${sym4}${sym5}`;
                            console.log(`Ticket combination: ${ticketCombo}`);
                            console.log(`Prize: ${sum} lv.`);
                        }
                    }
                }
            }
        }
    }
}

ticketCombination([17]);
ticketCombination([2568]);
ticketCombination([7589]);