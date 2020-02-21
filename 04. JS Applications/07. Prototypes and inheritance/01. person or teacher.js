'use strict';

class Person {
    name;
    mail;
    constructor(n, m) {
        this.name = n;
        this.mail = m;
    }

    toString() {
        console.log(this);
    }
}

class Teacher extends Person {
    subject;
    constructor(s, ...rest) {
        super(n, m);
        this.subject = s;
    }
}