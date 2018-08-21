'use strict';

var nameVar = 'Scott';
nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

var petName = getPetName();
console.log(petName);

// Block scoping
var fullName = 'Scott Diemer';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
