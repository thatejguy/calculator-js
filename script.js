function add(a, b) {
  let result = a + b;
  console.log(result);
  return result;
}
function subtract(a, b) {
  let result = a - b;
  console.log(result);
  return result;
}
function multiply(a, b) {
  let result = a * b;
  console.log(result);
  return result;
}
function divide(a, b) {
  let result = a / b;
  console.log(result);
  return result;
}


let firstNumber;
let secondNumber;
let operator;
let displayValue;


function operate(firstNumber, secondNumber) {

}


let display = document.querySelector('.display');
let plusing = document.querySelector('.plus');
let minusing = document.querySelector('.minus');
let divideing = document.querySelector('.divide');
let multiplying = document.querySelector('.multiply');
let clear = document.querySelector('.clear');


clear.addEventListener('click', () => {
  display.textContent = 0;
  displayValue = 0;
})


let one = document.getElementById("one");
one.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 1
    displayValue = 1;
  } else {
    display.textContent += 1
    displayValue += 1;
  }
})
let two = document.getElementById('two');
two.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 2;
  } else {
    display.textContent += 2;
  }
})
let three = document.getElementById('three');
three.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 3;
  } else {
    display.textContent += 3;
  }
})
let four = document.getElementById('four');
four.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 4;
  } else {
    display.textContent += 4;
  }
})
let five = document.getElementById('five');
five.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 5;
  } else {
    display.textContent += 5;
  }
})
let six = document.getElementById('six');
six.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 6;
  } else {
    display.textContent += 6;
  }
})
let seven = document.getElementById('seven');
seven.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 7;
  } else {
    display.textContent += 7;
  }
})
let eight = document.getElementById('eight');
eight.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 8;
  } else {
    display.textContent += 8;
  }
})
let nine = document.getElementById('nine');
nine.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 9;
  } else {
    display.textContent += 9;
  }
})