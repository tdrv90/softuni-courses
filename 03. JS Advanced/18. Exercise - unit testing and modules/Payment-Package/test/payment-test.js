const PaymentPackage = require('../payment.js');
let expect = require('chai').expect;

describe('PaymentPackage', function () {
    it('can be instanced with 2 parameters', function () {
        let expected = new PaymentPackage('aa', 1);

        expect(expected.name).to.equal('aa');
        expect(expected.value).to.equal(1);
    })
})