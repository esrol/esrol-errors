/**
 * @author Ivaylo Ivanov
 * @public
 * @class Register
 * @description A Class which holds the registry of errors.
 * It also contains methods for setting and getting said
 * errors from the registry.
 * @requires debug
 */
'use strict';
const debug = require('debug')('esrol-errors:register');

module.exports = class Register {

  /**
  * @public
  * @method constructor
  * @description run the _initializeProperties method
  * @see {@link _initializeProperties}
  */
  constructor() {
    this._initializeProperties();
  }

  /**
  * @public
  * @method setErrorWithNumber
  * @description Add an error message and corresponding number to the registry.
  * @param {string} description - description text of the error
  * @param {int} number - the number that the error will have
  * @throws {error} - throws error when incorrect arguments have been passed
  * @returns {boolean} true - returns true if adding was successful
  */
  setErrorWithNumber(description, number) {
    debug(
      'Setting error with number %s and description %s',
      number,
      description
    );
    if (typeof description !== 'string') {
      let e = `setErrorWithNumber expects first param to be description
      {string}, ${typeof description} given`;
      throw new Error(e);
    }
    if (!Number.isInteger(number)) {
      let e = `setErrorWithNumber expects second param to be integer,
      ${typeof number} given`;
      throw new Error(e);
    }
    if (!this.registry[number]) {
      this.registry[number] = description;
      return true;
    }
    description = this.registry[number];
    let e = `Error number ${number} exists with description: ${description}`;
    throw new Error(e);
  }

  /**
  * @public
  * @method getByNumber
  * @description Get an error by it's number.
  * @param {int} number - the number that the error has
  * @returns {string} - returns the message of the error
  */
  getByNumber(number) {
    debug('Getting the message of error number %s', number);
    return this.registry[number];
  }

  /**
  * @public
  * @method getAll
  * @description Get all the errors in the registry.
  * @returns {object} - returns all the errors in the registry
  */
  getAll() {
    debug('Getting all error messages and their numbers');
    let temp = {};
    for (let number in this.registry) {
      temp[number] = this.registry[number];
    }
    return temp;
  }

  /**
  * @private
  * @method _initializeProperties
  * @description Initializes the properties of the class.
  */
  _initializeProperties() {
    debug('Initializing properties');
    this.registry = {};
  }

};
