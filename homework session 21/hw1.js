/*
Creeaza o clasa care reprezinta o banca si are urmatoarele proprietati:
  • Nume
  • Cod SWIFT
  • Tara de origine
  • Lista de conturi deschise
  • Metoda pentru crearea unui cont
  • Metoda pentru afisarea conturilor deschise
  • Metoda pentru afisarea conturilor cu sold negativ

*/

class Bank {
  name;
  swift;
  country;

  #accounts = [];
  // createAccounts;
  // negativeAccounts;

  constructor(name, swift, country) {
    this.name = name;
    this.swift = swift;
    this.country = country;
  }

  listAccounts() {
    return this.#accounts;
  }

  addAccount(...acc) {
    this.#accounts.push(...acc);
  }
  listNegativeAccounts() {
    // return this.accounts[0].balance;
    return this.#accounts.filter((element) => element.balance < 0);
  }
}

const deutscheBank = new Bank('Deutsche Bank', 'RZRPROBU', 'Romania');
console.log(deutscheBank);

/*
Folosind constructor functions, creeaza modelul unui cont bancar pe care îl poți adăuga 
  in banca realizata mai sus. Acestea au următoarele proprietăți:
    • Numar cont
    • ID
    • Sold
    • Nume detinator cont
Folosind prototype, adaugă o metoda pe constructor function-ul de mai sus, cu ajutorul 
  căruia sa poți achita o suma X din cont.

*/

function BankAccount(accountNumber, ID, balance, accountName) {
  this.accountNumber = accountNumber;
  this.ID = ID;
  this.balance = balance;
  this.fullName = accountName;
}

BankAccount.prototype.payOff = function (amount) {
  this.balance = this.balance + amount;
  // return this;
};

const acc1 = new BankAccount(
  'RORNCB00012320909796',
  18905115515,
  -3233,
  'Andrei Varcus'
);
const acc2 = new BankAccount(
  'RORZB854326758365784',
  16309010072,
  9550,
  'Varcus Andrei'
);

console.log(acc1, acc2);

acc1.payOff(2233);
acc2.payOff(5550);

console.log(acc1, acc2);

// deutscheBank.createAccounts(acc1);
// deutscheBank.createAccounts(acc2);
deutscheBank.addAccount(acc1, acc2);
console.log(deutscheBank.listAccounts());
console.log(deutscheBank.listNegativeAccounts());
