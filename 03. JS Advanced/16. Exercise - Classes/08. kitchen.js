class Kitchen {
    constructor(budget, menu = [], productsInStock = {}, actionsHistory = []) {
        this.budget = budget;
        this.menu = menu;
        this.productsInStock = productsInStock;
        this.actionsHistory = actionsHistory;
    }

    loadProducts(arr) {
        arr.forEach(line => {
            let [productName, productQty, productPrice] = line.split(" ");
            productQty = +productQty;
            productPrice = +productPrice;

            if (productPrice <= this.budget) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = productQty;
                } else {
                    this.productsInStock[productName] += productQty;
                }
                return this.actionsHistory.push(`Successfully loaded ${productQty} ${productName}`);
            } else {
                return this.actionsHistory.push(`There was not enough money to load ${productQty} ${productName}`);
            }
        });
    }
}


let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.actionsHistory);