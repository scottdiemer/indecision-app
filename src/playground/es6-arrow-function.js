// const square = function (x) {
//   return x * x;
// }
//
// console.log(square(3));
//
// // const squareArrow = (x) => {
// //   return x * x;
// // }
//
// const squareArrow = (x) => x * x;
// console.log(squareArrow(4));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (x) => {
//   if(x) {
//     return x.split(' ')[0];
//   }
// };

const getFirstName = x => x.split(' ')[0];

console.log(getFirstName('Mike Smith'));

