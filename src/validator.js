"use strict";

class validator {
  constructor() {}

  /*
  * Method to test float numbers
  */
  isFloat(number) {
    return Number(number) === number && number % 1 !== 0;
  }

  /*
  * Method to test decimal numbers
  */
  isNumber(number) {
    let numExp = new RegExp(/^[0-9]+$/);
    return numExp.test(number);
  }

  /*
  * Method to test string input
  */
  isString(string) {
    let stringExp = new RegExp(/^[a-zA-Z\-!?\s]*$/);
    return stringExp.test(string);
  }

  /*
  * Method to test boolean input
  */
  isBoolean(variable) {
    return typeof(variable) === "boolean";
  }

  /*
  * Method to test string const of letters and numbers
  */
  isNumAndLetter(string) {
    let numberString = new RegExp('^[a-zA-Z0-9\-!?]*$');
    return numberString.test(string);
  }

}

module.exports = validator;