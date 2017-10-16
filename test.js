const test = require('ava');
const m = require('.');

test('Base', t => {
    t.is(typeof m, 'function');
});
