"use strict";

class validator {

  constructor() {}

  isFloat(number) {
    return Number(number) === number && number % 1 !== 0;
  }

}

module.exports = validator;