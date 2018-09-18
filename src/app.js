import {isAdult, canDrink} from './person.js';
// import './utils.js';
// import { square, add } from './utils.js';
//
// console.log('app.js is running!!!!');
// console.log(square(4));
// console.log(add(4, 5));

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false
//
// import isAdult and canDrink
// use both printing result to the console
console.log('is adult at 18: ' + isAdult(18));
console.log('is adult at 16: ' + isAdult(16));
console.log('can drink at 18: ' + canDrink(18));
console.log('can drink at 24: ' + canDrink(24));
