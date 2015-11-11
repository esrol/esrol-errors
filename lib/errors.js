'use strict';
let errors = require ('errors');
let Register = require('./register');

module.exports = class Errors {

  setWithNumber(number, description) {
    return Register.setWithNumber(number, description);
  } 

  getByNumber(number) {
    return Register.getByNumber(number);
  } 

  getAllErrors() {
    return Register.getAll();
  }

  error(e, code) {
    let error = {};
    error.name = 'FatalError';
    error.defaultMessage = e;
    if (typeof code === 'number') {
      error.code = code;
      error.defaultExplanation = Register.getByNumber(code);     
    }
    errors.create(error); 
    return this._throw();
  }

  _throw() {
    throw new errors.FatalError();      
  }

}