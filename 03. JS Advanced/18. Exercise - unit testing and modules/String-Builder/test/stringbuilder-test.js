const StringBuilder = require('../index.js');
let expect = require('chai').expect;

describe('StringBuilder', function () {
    it('can be instantiated without anything', function () {
        let expected = new StringBuilder();
        expect(expected).to.be.a('object');
    });
    it('can be instantiated with a passed in string argument', function () {
        let expected = new StringBuilder('Test');
        expect(expected._stringArray).to.have.lengthOf(4);
    });
    it('append(string) at the end', function () {
        let expected = new StringBuilder('Test');
        expected.append('demo');
        expect(expected._stringArray[0]).to.be.equal('T');
    });
    it('append(string) at the beninning', function () {
        let expected = new StringBuilder('Test');
        expected.prepend('demo');
        expect(expected._stringArray[0]).to.be.equal('d');
    });
    it('insert at index', function () {
        let expected = new StringBuilder('te');
        expected.insertAt('D', 1);
        expect(expected._stringArray[1]).to.be.equal('D');
    });
    it('remove x length from startIndex', function () {
        let expected = new StringBuilder('Abcdef');
        expected.remove(1, 2);
        expect(expected._stringArray[1]).to.be.equal('d');
    });
    it('toString', function () {
        let expected = new StringBuilder('Abcdef');
        expect(expected.toString()).to.be.equal('Abcdef');
    });
    it('All passed in arguments should be strings.', function () {
        expect(() => new StringBuilder(21)).to.Throw('Argument must be string');
    });
});

//