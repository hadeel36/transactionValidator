"use strict";

let validator = require('./validator');

class App {
  constructor() {
  }

  test() {
    let isF = new validator();
    console.log(isF.isFloat(55.5));
    console.log('hello');
    console.log('hadeel');
  }
}

const a = new App();
a.test();