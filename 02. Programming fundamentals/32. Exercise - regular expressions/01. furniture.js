function furniture(input) {
    let totalSum = 0;
    console.log('Bought furniture:')
    input.forEach((line) => {
        const pattern = />>(?<furniture>[a-zA-Z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d]+)/gm;

        let result = pattern.exec(line);

        if (result) {
            console.log(result.groups.furniture);
            totalSum += Number(result.groups.price) * Number(result.groups.quantity);
        }
    })
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);