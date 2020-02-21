const Extensible = (function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(template) {
            Object.entries(template)
                .forEach(([key, value]) => {
                    if (typeof value === 'function') {
                        Object.getPrototypeOf(this)[key] = value; // IMPORTANT: this is how we get the prototype of an instance of the class
                    } else {
                        this[key] = value;
                    }
                })
        }
    }
}())

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);