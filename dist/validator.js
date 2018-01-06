"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validator = function () {
  function validator() {
    _classCallCheck(this, validator);
  }

  /*
  * Method to test float numbers
  */


  _createClass(validator, [{
    key: "isFloat",
    value: function isFloat(number) {
      return Number(number) === number && number % 1 !== 0;
    }

    /*
    * Method to test decimal numbers
    */

  }, {
    key: "isNumber",
    value: function isNumber(number) {
      var numExp = new RegExp(/^[0-9]+$/);
      return numExp.test(number);
    }

    /*
    * Method to test string input
    */

  }, {
    key: "isString",
    value: function isString(string) {
      var stringExp = new RegExp(/^[a-zA-Z\-!?\s]*$/);
      return stringExp.test(string);
    }

    /*
    * Method to test boolean input
    */

  }, {
    key: "isBoolean",
    value: function isBoolean(variable) {
      return typeof variable === "boolean";
    }

    /*
    * Method to test string const of letters and numbers
    */

  }, {
    key: "isNumAndLetter",
    value: function isNumAndLetter(string) {
      var numberString = new RegExp('^[a-zA-Z0-9\-!?]*$');
      return numberString.test(string);
    }
  }]);

  return validator;
}();

module.exports = validator;