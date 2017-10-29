const test = require('ava');
const getProps = require('.');

test('Enums', t => {
    const o = {};
    Reflect.defineProperty(o, 'x', {enumerable: false, value: 0});
    t.is(getProps(o, {enums: false}).indexOf('x'), -1);
    t.not(getProps(o).indexOf('x'), -1);
    t.is(getProps([], {enums: false}).indexOf('length'), -1);
    t.not(getProps([]).indexOf('length'), -1);
});

test('Protos', t => {
    const F = function(){
        this.x = 1;
    };
    F.prototype.y = 1;
    const p = new F();
    const o = {};
    Reflect.setPrototypeOf(o, p);
    t.is(getProps(o).indexOf('x'), -1);
    t.not(getProps(o, {protos: true}).indexOf('x'), -1);
    t.is(getProps(o, {protos: true}).indexOf('y'), -1);
    t.is(getProps(o, {protos: true}).indexOf('toString'), -1);
});

test('Symbols', t => {
    const s = Symbol('1');
    const a = [1];
    a[s] = 1;
    t.is(getProps(a).indexOf(s), -1);
    t.not(getProps(a, {symbols: true}).indexOf(s), -1);
});
