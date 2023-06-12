/*
Folosind cele invatate, poți face interfata unui calculator, respectiv functionalitatea lui.

Valideaza input-ul, astfel incat utilizatorul sa nu poată introduce altceva inafara de numere.

Tot pe aceeași pagina afișează și rezultatul calculului.


*/
const stdWidth = document.getElementById('stdWidth');
const fullWidth = document.getElementById('fullWidth');
const body = document.body;
const memory = document.getElementById('memory');
const resultInput = document.getElementById('calculator-input');
const cButton = document.getElementById('c-button');
const delButton = document.getElementById('del-button');
const eButton = document.getElementById('equal');
const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divButton = document.getElementById('div');
const powButton = document.getElementById('pow');
const divXButton = document.getElementById('divx');
const sqrtButton = document.getElementById('sqrt');

stdWidth.addEventListener('click', () => {
  body.classList.add('body-size');
});
fullWidth.addEventListener('click', () => {
  body.classList.remove('body-size');
});

const clear = () => {
  resultInput.value = '';
  memory.textContent = '';
};
const del = () => {
  resultInput.value = resultInput.value.slice(0, -1);
};
const equalize = () => {
  memory.textContent += resultInput.value;
  resultInput.value = Function('return ' + memory.textContent)();
};
const plus = () => {
  memory.textContent = `${resultInput.value} + `;
  resultInput.value = '';
};
const minus = () => {
  memory.textContent = `${resultInput.value} - `;
  resultInput.value = '';
};
const multiply = () => {
  memory.textContent = `${resultInput.value} * `;
  resultInput.value = '';
};
const divide = () => {
  memory.textContent = `${resultInput.value} / `;
  resultInput.value = '';
};
const powX = () => {
  memory.textContent = `${resultInput.value} `;
  resultInput.value **= resultInput.value;
};
const divX = () => {
  memory.textContent = `${resultInput.value} `;
  resultInput.value = 1 / resultInput.value;
};
const sqrtX = () => {
  memory.textContent = `${resultInput.value} `;
  resultInput.value = Math.sqrt(resultInput.value);
};

cButton.addEventListener('click', clear);
delButton.addEventListener('click', del);
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
multiplyButton.addEventListener('click', multiply);
divButton.addEventListener('click', divide);
eButton.addEventListener('click', equalize);
powButton.addEventListener('click', powX);
divXButton.addEventListener('click', divX);
sqrtButton.addEventListener('click', sqrtX);

button0.addEventListener('click', () => {
  resultInput.value += 0;
});
button1.addEventListener('click', () => {
  resultInput.value += 1;
});
button2.addEventListener('click', () => {
  resultInput.value += 2;
});
button3.addEventListener('click', () => {
  resultInput.value += 3;
});
button4.addEventListener('click', () => {
  resultInput.value += 4;
});
button5.addEventListener('click', () => {
  resultInput.value += 5;
});
button6.addEventListener('click', () => {
  resultInput.value += 6;
});
button7.addEventListener('click', () => {
  resultInput.value += 7;
});
button8.addEventListener('click', () => {
  resultInput.value += 8;
});
button9.addEventListener('click', () => {
  resultInput.value += 9;
});
