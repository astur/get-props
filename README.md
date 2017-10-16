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

* **protos** (Boolean, default: `false`) - if `true` prototype chain properties of `obj` will found too.

* **symbols** (Boolean, default: `false`) - if `true` properties of `obj` with symbol key will found too.

## License

MIT

[npm-url]: https://npmjs.org/package/get-props
[npm-image]: https://badge.fury.io/js/get-props.svg
[travis-url]: https://travis-ci.org/astur/get-props
[travis-image]: https://travis-ci.org/astur/get-props.svg?branch=master