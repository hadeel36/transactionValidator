"use strict";

let _ = require('lodash');
let validator = require('./validator');
let transaction = require('../mockData/transaction.json');

class App {
  constructor() {
  }

  /*
  * Method that do the validation process
  */
  doValidate() {
    let taxesArr = _.pick(transaction, "taxes");
    taxesArr.taxes.forEach(obj => {
      if(this.taxValidation(obj)) {
        console.log('Tax object is valid');
      } else {
        console.log('Tax object is not valid');
      }
    });
  }

  /*
  * Method that validate Tax object
  */
  taxValidation(taxObj) {
    let validate = new validator();
    return validate.isNumAndLetter(taxObj.id) &&
           validate.isString(taxObj.name) &&
           validate.isFloat(taxObj.rate) &&
           validate.isString(taxObj.inclusion_type) &&
           validate.isBoolean(taxObj.is_custom_amount) &&
           validate.isNumber(taxObj.applied_money.amount) &&
           validate.isString(taxObj.applied_money.currency)
  }
}

/*
* Run
*/
const newValidator = new App();
newValidator.doValidate();