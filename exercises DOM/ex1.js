// Fa o lista de cumparaturi,
// dar toate list item sa fie adaugate cu ajutorul unui input
// la click pe buton de "Adauga in lista" sau Enter
// Dupa adaugarea in lista sa se curete input-ul

const shopInput = document.getElementById('shopInput');
const shoppingList = document.getElementById('shoppingList');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
  if (shopInput.value) {
    const itemInput = document.createElement('li');
    itemInput.textContent = shopInput.value;
    shoppingList.appendChild(itemInput);
    shopInput.value = '';
  }
});
shopInput.addEventListener('keydown', (event) => {
  if (shopInput.value && event.key == 'Enter') {
    event.preventDefault();
    const itemInput = document.createElement('li');
    itemInput.textContent = shopInput.value;
    shoppingList.appendChild(itemInput);
    shopInput.value = '';
  }
});
