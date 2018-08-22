// arguments object - no longer bound with arrow functions

const add = (a, b) => a + b;

console.log(add(55,1));

// this keyword - no longer bound

const user = {
  name: 'Scott',
  cities: ['Orlando', 'Winter Park'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);   
  }
};

console.log(user.printPlacesLived());


// Challenge area

const multiplier = {
  // numbers - array of numbers
  numbers: [1,2,3],
  // multiplyBy - single number
  multiplyBy: 2,
  // multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
}

console.log(multiplier.multiply());
