function storeProvision(stock, order) {
    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let productQuantity = Number(stock[i + 1]);
        products[productName] = productQuantity;
    }

    for (let i = 0; i < order.length; i += 2) {
        let orderProductName = order[i];
        let orderProductQuantity = Number(order[i + 1]);

        if (products.hasOwnProperty(orderProductName)) {
            products[orderProductName] += orderProductQuantity;
        } else {
            products[orderProductName] = orderProductQuantity;
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);