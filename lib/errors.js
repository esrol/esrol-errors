/**
 * @author Ivaylo Ivanov
 * @public
 * @class Errors
 * @description An Errors Class for esrol-server-app.
 * It is used for registering new custom errors with numbers,
 * can get a single or all errors in the registry,
 * has a custom throw error method.
 * @requires errors
 * @requires register
 * @requires debug
 */
'use strict';
const errors = require('errors');
const Register = require('./register');
const debug = require('debug')('esrol-errors:errors');

module.exports = class Errors {

  /**
  * @public
  * @method constructor
  * @description Initialize Register class
  */
  constructor() {
    this._Register = new Register();
  }

  /**
  * @public
  * @method registerErrorWithNumber
  * @description Register / set an error with a number. This method returns
  * the output of setErrorWithNumber from the Register class.
  * @param {string} description - description text of the error
  * @param {int} number - the number that the error will have
  * @throws {error} error - if thrown by setErrorWithNumber
  * @returns {boolean} true
  * @see {@link setErrorWithNumber}
  */
  registerErrorWithNumber(description, number) {
    return this._Register.setErrorWithNumber(description, number);
  }

  /**
  * @public
  * @method getByNumber
  * @description Get an error by it's number. This method returns
  * the output of getByNumber from the Register class.
  * @param {int} number - the number of the error
  * @returns {object}
  * @see {@link getByNumber}
  */
  getByNumber(number) {
    return this._Register.getByNumber(number);
  }

  /**
  * @public
  * @method getAllErrors
  * @description Get the whole registry with all the errors. This method returns
  * the output of getAll from the Register class.
  * @returns {object}
  * @see {@link getAll}
  */
  getAllErrors() {
    return this._Register.getAll();
  }

  /**
  * @public
  * @method error
  * @description custom method for error handling. This method returns
  * the output of _throw from this class.
  * @param {string} message - message / text of the error
  * @param {int} code - the number that the error has
  * @returns {error}
  * @see {@link _throw}
  */
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

  /**
  * @private
  * @method _throw
  * @description custom method for throwing an error
  * @param {object} error - the error to be thrown
  * @throws {error} CatchAndConsoleLogThisErrorForMoreInfo
  * - throws specified error
  */
  _throw(error) {
    debug('Throwing an error - %s', error);
    var CatchAndConsoleLogThisErrorForMoreInfo = errors.create(error);
    throw new CatchAndConsoleLogThisErrorForMoreInfo();
  }

};
