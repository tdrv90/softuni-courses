function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shireldPrice, armourPrice) {
    let helmetRepairs = Math.floor(lostFightCount / 2);
    let swordRepairs = Math.floor(lostFightCount / 3);
    let shieldRepairs = Math.floor(lostFightCount / 6);
    let armourRepairs = Math.floor(lostFightCount / 12);

    let totalRepairs = (helmetPrice * helmetRepairs) + (swordPrice * swordRepairs) + (shireldPrice * shieldRepairs) + (armourPrice * armourRepairs)

    let total = `Gladiator expenses: ${totalRepairs.toFixed(2)} aureus`;

    return total;
}

console.log(gladiatorExpenses(7, 2, 3, 4, 5));
console.log(gladiatorExpenses(23, 12.50, 21.50, 40, 200));