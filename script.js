//selectors
const display = document.querySelector('.display')

//variables
let firstNumber;
let lastNumber;
let operator;

//logic
const logic = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
}

//buttons
let buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
  button.addEventListener('click', () => {
    if (button.textContent === '1') {
      console.log('Button One');
      return display.textContent += '1';
    } else if (button.textContent === '2') {
      console.log('Button Two');
      return display.textContent += '2';
    } else if (button.textContent === '3') {
      console.log('Button Three');
      return display.textContent += '3';
    } else if (button.textContent === '4') {
      console.log('Button Four');
      return display.textContent += '4';
    } else if (button.textContent === '5') {
      console.log('Button Five');
      return display.textContent += '5';
    } else if (button.textContent === '6') {
      console.log('Button Six');
      return display.textContent += '6';
    } else if (button.textContent === '7') {
      console.log('Button Seven');
      return display.textContent += '7';
    } else if (button.textContent === '8') {
      console.log('Button Eight');
      return display.textContent += '8';
    }
  })
})







