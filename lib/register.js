'use strict';

module.exports = class Register {

  constructor() {
    this._initializeProperties();
  }

  setErrorWithNumber(description, number) {
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

  getByNumber(number) {
    return this.registry[number];
  }

  getAll() {
    let temp = {};
    for (let number in this.registry) {
      temp[number] = this.registry[number];
    }
    return temp;
  }

  _initializeProperties() {
    this.registry = {};
  } 

};