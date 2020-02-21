class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const myCar = new Vehicle('Toyota', 'Auris', '2011');

console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

