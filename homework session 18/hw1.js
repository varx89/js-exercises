/*
1.Creeaza un obiect, care sa reprezinte o masina cu următoarele proprietăți: marca, model, 
          an, pret, km, combustibil, cai putere, data ultimei revizii, data urmatoarei revizii.
  a. Sterge data ultimei revizii
  b. Modifica caii putere
  c. Adaugă proprietate pentru data primei inmatriculari
*/

const car = {
  make: "Skoda",
  model: "Octavia",
  year: 2010,
  price: 7000,
  km: 215000,
  fuel: "Diesel",
  hp: 120,
  lastRev: new Date("August 24, 2022"),
  nextRev: new Date("2023-08-24"),
};

console.log(car);

// a Sterge data ultimei revizii
car.lastRev = "";
// delete car.lastRev;

// b. Modifica caii putere
car.km = 237000;

// c. Adaugă proprietate pentru data primei inmatriculari
car.firstReg = new Date("February 16, 2010");

/*
2. Folosind obiectul Date, afișează ora curentă, folosind formatul HH:MM:SS.
*/

const date = new Date();
//toLocaleTimeString('it-IT')
let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
let minutes =
  date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
let seconds =
  date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

console.log(hours + ":" + minutes + ":" + seconds);
