function storeProvision(stock, order) {
    let currentStock = {};

    getCurrentStock(stock);
    addOrderToStock(order);
    printStock(currentStock);

    function getCurrentStock(stock) {
        for (let i = 0; i < stock.length; i = i + 2) {
            const product = stock[i];
            const qty = Number(stock[i + 1]);

            currentStock[product] = qty;
        }

        return currentStock;
    }

    function addOrderToStock(order) {
        for (let i = 0; i < order.length; i = i + 2) {
            product = order[i];
            qty = Number(order[i + 1]);

            if (!currentStock.hasOwnProperty(product)) {
                currentStock[product] = qty;
            } else {
                currentStock[product] += qty;
            }
        }

        return currentStock;
    }

    function printStock(currentStock) {
        let finalStock = Object.entries(currentStock);

        for (const [productName, qty] of finalStock) {
            console.log(`${productName} -> ${qty}`);
        }
    }
}

storeProvision(['Chips',
    '5',
    'CocaCola',
    '9',
    'Bananas',
    '14',
    'Pasta',
    '4',
    'Beer',
    '2'], ['Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30']
);