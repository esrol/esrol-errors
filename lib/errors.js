'use strict';
let errors = require ('errors');
let Register = require('./register');

module.exports = class Errors {

  constructor() {
    this._Register = new Register();
  }

  registerErrorWithNumber(number, description) {
    return this._Register.setErrorWithNumber(number, description);
  } 

  getByNumber(number) {
    return this._Register.getByNumber(number);
  } 

  getAllErrors() {
    return this._Register.getAll();
  }

  error(e, code) {
    let error = {};
    error.name = 'FatalError';
    error.defaultMessage = e;
    if (typeof code === 'number') {
      error.code = code;
      error.defaultExplanation = this._Register.getByNumber(code);     
    }
    return this._throw(error);
  }

  _throw(error) {
    var catchAndConsoleLogThisErrorForMoreInfo = errors.create(error);
    throw new catchAndConsoleLogThisErrorForMoreInfo();      
  }

};