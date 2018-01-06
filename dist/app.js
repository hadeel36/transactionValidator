"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');
var validator = require('./validator');
var transaction = require('../mockData/transaction.json');

var App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  /*
  * Method that do the validation process
  */


  _createClass(App, [{
    key: 'doValidate',
    value: function doValidate() {
      var _this = this;

      var taxesArr = _.pick(transaction, "taxes");
      taxesArr.taxes.forEach(function (obj) {
        if (_this.taxValidation(obj)) {
          console.log('Tax object is valid');
        } else {
          console.log('Tax object is not valid');
        }
      });
    }

    /*
    * Method that validate Tax object
    */

  }, {
    key: 'taxValidation',
    value: function taxValidation(taxObj) {
      var validate = new validator();
      return validate.isNumAndLetter(taxObj.id) && validate.isString(taxObj.name) && validate.isFloat(taxObj.rate) && validate.isString(taxObj.inclusion_type) && validate.isBoolean(taxObj.is_custom_amount) && validate.isNumber(taxObj.applied_money.amount) && validate.isString(taxObj.applied_money.currency);
    }
  }]);

  return App;
}();

/*
* Run
*/


var newValidator = new App();
newValidator.doValidate();