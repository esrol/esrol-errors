'use strict';
let registry = new WeakMap();

module.exports = class Register {

  constructor() {
    throw new Error('Register is a static class');
  }

  static setWithNumber(number, description) {
    if (!registry[number]) {
      registry[number] = description;
      return true;
    }
    description = registry[number];
    let e = `Error number ${number} exists with description: ${description}`;
    throw new Error(e);
  }

  static getByNumber(number) {
    return registry[number];
  }

  static getAll() {
    let temp = {};
    for (let number in registry) {
      temp[number] = registry[number];
    }
    return temp;
  } 

};