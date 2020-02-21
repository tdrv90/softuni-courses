class Figure {
    units = {
        m: 0.01,
        cm: 1,
        mm: 10
    };
    defaultUnit;

    constructor(unit = 'cm') {
        this.defaultUnit = unit;
    }

    get area() { return NaN };
    toString() { return `Figures units: ${this.defaultUnit} Area: ${this.area}` };
    changeUnits(x) { this.defaultUnit = x };
}

class Circle extends Figure {
    radius = 0;
    constructor(unit = 'cm', r) {
        super(unit);
        this.radius = r;
    }
    get area() {
        let r = (this.radius * this[this.defaultUnit]);
        return Math.PI * r * r;
    }
    toString() { return super.toString() + ` - radius: ${this.radius}` }
}

class Rect extends Figure {
    width = 0;
    height = 0;
    constructor(unit = 'cm', w, h) {
        super(unit);
        this.width = w;
        this.height = h;
    }
    calcWithUnit(x) { return x * this.units[this.defaultUnit] };
    get h() { return this.width * this[this.defaultUnit] };
    get w() { return this.height * this[this.defaultUnit] };
    get area() { return this.w * this.h };
    toString() { return super.toString() + ` - width: ${this.width} - height: ${this.height}` };
}