//Zadanie #31300 (bez uwzględnienia, że liczby mogą być równe)
console.log("Test konsoli");

let num1 = 2;
let num2 = 5;

function compare(a, b) {
  if (a > b) {
    return a + " jest większe";
  } else {
    return b + " jest większe";
  }
}

let result = compare(num1, num2);
console.log(result);

//Zadanie #31301

let paragraph = document.getElementById("opis");
let button = document.querySelector("button");

function opis() {
  paragraph.innerText = "Opis produktu";
}
button.onclick = opis;
//Zadanie #31302

let string1 = "Uwielbiam Java Script";
let string2 = "Jestem świetnym programstą";

function length(s1, s2) {
  if (s1.length > s2.length) {
    return s1;
  } else {
    return s2;
  }
}

console.log(length(string1, string2));

//Zadanie #31303

function isInRange(n) {
  if (n >= 100 && n <= 200) {
    console.log("Liczba jest w przedziale");
  } else {
    console.log("liczba nie jest w przedziale");
  }
}

isInRange(99);

//Zadanie #31304

function myFunction(a, b) {
  if (a === 20 || b === 20 || a + b <= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(myFunction(21, 36));

//Zadanie #31305

let parag1 = document.getElementById("tekst");
let button1 = document.getElementById("dodaj");
let button2 = document.getElementById("usun");

function addText() {
  parag1.innerText = "Jakiś przykładowy dodany tekst";
}

function removeText() {
  parag1.innerText = "";
}

button1.onclick = addText;
button2.onclick = removeText;

//Zadanie #31306

function math(x, y) {
  let sum = x + y;
  let diff = x - y;
  let product = x * y;

  if (sum >= 0) {
    console.log(sum);
  } else {
    console.log("Wynik nieprawidłowy");
  }

  if (diff >= 0) {
    console.log(diff);
  } else {
    console.log("Wynik nieprawidłowy");
  }

  if (product >= 0) {
    console.log(product);
  } else {
    console.log("Wynik nieprawidłowy");
  }
}
math(-5, -5);

//Zadanie #31307

let myArray = [1, 5, 8, 16, 39];

function arrayFunction(x) {
  let first = x[0];
  console.log(first);
  return first;
}

arrayFunction(myArray);

//Zadanie #31308

let firstInput = document.getElementById("fname");
let secondInput = document.getElementById("sname");
let thirdInput = document.getElementById("phoneNr");
let button3 = document.getElementById("displayData");

let p1 = document.getElementById("name");
let p2 = document.getElementById("surname");
let p3 = document.getElementById("phone");

function displayFunction() {
  p1.innerText = firstInput.value;
  p2.innerText = secondInput.value;
  p3.innerText = thirdInput.value;
}

button3.onclick = displayFunction;
