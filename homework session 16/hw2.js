/*
2. Creeaza o funcție care gaseste toate valorile duplicate intr-un array
 și returnează o lista cu toate valorile care apar de mai multe ori.
*/

let numbers = [8, 19, 65, 33, 8, 22, 19, 33, 4, 16, 23, 22, 33];

const showDuplicates = (myArray) => {
  let array = [...myArray];
  let resArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[i + j + 1] && resArray.indexOf(array[i]) < 0) {
        resArray.push(array[i]);
      }
    }
  }
  return resArray;
};

console.log(showDuplicates(numbers));

//return without duplicates
const notShowDuplicates = (myArray) => {
  let array = [...myArray];
  let resArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[i + j + 1] && !resArray.includes(array[i])) {
        resArray.push(array[i]);
      }
    }
  }
  return resArray;
};

console.log(notShowDuplicates(numbers));
