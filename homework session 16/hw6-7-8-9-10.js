/*
6. Creeaza o funcție care calculeaza aria unui cerc.
*/

const areaOfCircle = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};
console.log(areaOfCircle(10));

/*
7. Creeaza o funcție care inverseaza un numar (762345 => 543267).
*/

const invertNumber = (number) => {
  number = number.toString().split("");
  number = number.reverse();
  number = number.join("");
  number = Number(number);
  return number;
};

console.log(invertNumber(762345));

/*
8. Creeaza o functie care verifica daca un numar este palindrom.
*/

const isPalindrome = (number) => {
  number = number.toString();

  for (let i = 0; i < number.length / 2; i++) {
    if (number.charAt(i) !== number.charAt(number.length - i - 1)) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(12621));

/*
9. Creeaza o functie care genereaza un numar random intre doua valori.
*/

const randomNumber = (min, max) => {
  let random = Math.random() * (max - min) + min;
  return parseInt(random);
};

console.log(randomNumber(2, 8));

/*
10. Creeaza o functie care numara toate vocalele intr-un string.
*/

const countVowels = (string) => {
  string = string.toString().toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let letter of string) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("Andrei"));
