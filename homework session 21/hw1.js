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
  // listAccounts;
  // createAccounts;
  // negativeAccounts;

  constructor(name, swift, country) {
    this.name = name;
    this.swift = swift;
    this.country = country;
  }

  listAccounts() {}
  createAccounts() {}
  negativeAccounts() {}
}

const bank1 = new Bank('Deutsche Bank', 'RZRPROBU', 'Romania');
console.log(bank1);

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

const acc1 = new BankAccount(
  'RORNCB00012320909796',
  Date.now(),
  19233,
  'Andrei Varcus'
);

console.log(acc1);
