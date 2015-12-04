[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

# esrol-errors
An Errors Class for esrol-server-app. It is used for registering new custom errors with numbers, can get a single or all errors in the registry, has a custom throw error method.


## Installation

```sh
$ npm install --save esrol-errors
```

## Usage

```js
'use strict';
let Errors = require('esrol-errors');
let errors = new Errors();

errors.registerErrorWithNumber('Some error message', 1);
let all = errors.getAllErrors();
let error = errors.getByNumber(1);
console.log (error); // Some error message
console.log (all); // { '1': 'Some error message' }
try {
  errors.error('the reason for this erros is to show some example', 1);
} catch(e) {
  console.log (e);
}
```

## Classes
<dl>
<dt><a href="#Errors">Errors</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#registerErrorWithNumber">registerErrorWithNumber(description, number)</a> ⇒ <code>boolean</code></dt>
<dd><p>Register / set an error with a number.</p>
</dd>
<dt><a href="#getByNumber">getByNumber(number)</a> ⇒ <code>object</code></dt>
<dd><p>Get an error by it&#39;s number.</p>
</dd>
<dt><a href="#getAllErrors">getAllErrors()</a> ⇒ <code>object</code></dt>
<dd><p>Get the whole registry with all the errors.</p>
</dd>
<dt><a href="#error">error(message, code)</a> ⇒ <code><a href="#error">error</a></code></dt>
<dd><p>Custom method for error handling.</p>
</dd>
</dl>
<a name="Errors"></a>
## Errors
**Access:** public  
**Author:** Ivaylo Ivanov  
<a name="new_Errors_new"></a>
### new Errors()
An Errors Class for esrol-server-app.
It is used for registering new custom errors with numbers,
can get a single or all errors in the registry,
has a custom throw error method.

<a name="registerErrorWithNumber"></a>
## registerErrorWithNumber(description, number) ⇒ <code>boolean</code>
Add a new error message and corresponding number to the registry.

**Returns**: <code>boolean</code> - true - returns true if adding was successful  
**Throws**:

- <code>[error](#error)</code> error - when incorrect arguments have been passed

**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | description text of the error |
| number | <code>int</code> | the number that the error will have |

<a name="getByNumber"></a>
## getByNumber(number) ⇒ <code>object</code>
Get an error by it's number.

**Returns**: <code>string</code> - - returns the message of the error  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>int</code> | the number of the error |

<a name="getAllErrors"></a>
## getAllErrors() ⇒ <code>object</code>
Get the whole registry with all the errors. This method returns
the output of getAll from the Register class.

**Returns**: <code>object</code> - - returns all the errors in the registry  
**Access:** public  
<a name="error"></a>
## error(message, code) ⇒ <code>[error](#error)</code>
Custom method for error handling.

**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | message / text of the error |
| code | <code>int</code> | the number that the error has |

## License

MIT © [Ivaylo Ivanov]()


[npm-image]: https://badge.fury.io/js/esrol-errors.svg
[npm-url]: https://npmjs.org/package/esrol-errors
[travis-image]: https://travis-ci.org/ivaylopivanov/esrol-errors.svg?branch=master
[travis-url]: https://travis-ci.org/ivaylopivanov/esrol-errors
[daviddm-image]: https://david-dm.org/ivaylopivanov/esrol-errors.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ivaylopivanov/esrol-errors
[coveralls-image]: https://coveralls.io/repos/ivaylopivanov/esrol-errors/badge.svg
[coveralls-url]: https://coveralls.io/r/ivaylopivanov/esrol-errors
