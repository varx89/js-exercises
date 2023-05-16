/*
3. Creeaza o funcție care gaseste cel mai lung 
string intr-un array și returnează acest string.
*/

let stringArray = ["Andrei", "Ada", "Diana", "Alexandra", "Anastasia"];

const maxStringLength = (myArray) => {
  let highString = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length > highString.length) {
      highString = myArray[i];
    }
  }
  return highString;
};

console.log(maxStringLength(stringArray));

/*
4. Creeaza o funcție care face conversia 
numerelor romane (pana la 1000) in numere intregi.
*/

const convertIntRomanize = (untilNum) => {
  for (let i = 1; i <= untilNum; i++) {
    console.log(romanize(i));
  }
  function romanize(num) {
    const romanLetters = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let res = "";

    for (let key in romanLetters) {
      while (num >= key) {
        res += romanLetters[key];
        num -= romanLetters[key];
      }
    }
    return res;
  }
};

convertIntRomanize(10);

/*
5. Creeaza o funcție care face conversia 
gradelor Celsius in grade Fahrenheit.
*/

const celsiusToFahrenheit = (grade) => {
  return (grade * 9) / 5 + 32;
};

console.log(celsiusToFahrenheit(40));
