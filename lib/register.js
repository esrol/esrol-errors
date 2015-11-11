'use strict';

module.exports = class Register {

  constructor() {
    this._initializeProperties();
  }

  setErrorWithNumber(number, description) {
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