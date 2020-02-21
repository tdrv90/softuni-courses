function listOfProducts(arguments) {
    let sortedProducts = arguments.sort();

    for (let i = 0; i < sortedProducts.length; i++) {
        const element = sortedProducts[i];

        console.log(`${i + 1}.${element}`);
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);