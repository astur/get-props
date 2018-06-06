# get-props

gets exactly those property names that you need

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i get-props
```

## Usage

```js
const getProps = require('get-props');

getProps(obj, options);
```

**obj** - object whose properties you want to receive

**options** - object with following fields:

* **enums** (Boolean, default: `true`) - if `false` only enumerable properties of `obj` will found.

* **protos** (Boolean, default: `false`) - if `true` properties of objects (but not classes) in prototype chain of `obj` will found too.

* **symbols** (Boolean, default: `false`) - if `true` properties of `obj` with symbol key will found too.

Returns array of property names.

## Example

```js
const s = Symbol();
const o1 = {};
o1[s] = 1;

const o2 = {};
Reflect.defineProperty(o2, 'notEnum', {enumerable: false, value: 1});

const F = function(){this.field = 1};
F.prototype.staticField = 1;
const o3 = new F();

Reflect.setPrototypeOf(o1, o2);
Reflect.setPrototypeOf(o2, o3);

console.log(getProps(o1, {protos: true, symbols: true}));
//[Symbol(""), "notEnum", "field"]

console.log(getProps(o1, {enums: false}));
//[]
```

## License

MIT

[npm-url]: https://npmjs.org/package/get-props
[npm-image]: https://badge.fury.io/js/get-props.svg
[travis-url]: https://travis-ci.org/astur/get-props
[travis-image]: https://travis-ci.org/astur/get-props.svg?branch=master