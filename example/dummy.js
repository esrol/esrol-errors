'use strict';
let Errors = require('xena-errors');
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