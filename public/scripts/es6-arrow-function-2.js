'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
  name: 'Scott',
  cities: ['Orlando', 'Winter Park'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  // numbers - array of numbers
  numbers: [1, 2, 3],
  // multiplyBy - single number
  multiplyBy: 2,
  // multiply - return a new array where the numbers have been multiplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.multiplyBy * number;
    });
  }
};

console.log(multiplier.multiply());
