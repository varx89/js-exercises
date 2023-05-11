/*
1. Creeaza o funcție care primește ca parametru doua numere
și returnează rezultatul ridicării primului
număr la puterea celui de-al doilea număr.
*/

// with for loop
const multiplyWithForLoop = (num1, num2) => {
  let expo = 1;
  for (let i = 0; i < num2; i++) {
    expo *= num1;
  }
  return expo;
};

console.log(multiplyWithForLoop(2, 4));

//while loop
const multiplyWithWhileLoop = (num1, num2) => {
  let i = 0;
  let expo = 1;
  while (i < num2) {
    expo *= num1;
    i++;
  }
  return expo;
};

console.log(multiplyWithWhileLoop(2, 5));

//exponetial operator **
const multiplyWithOperator = (num1, num2) => {
  return num1 ** num2;
};

console.log(multiplyWithOperator(2, 6));

//math.pow function
const multiplyWithPow = (num1, num2) => {
  return Math.pow(num1, num2);
};

console.log(multiplyWithPow(2, 7));
