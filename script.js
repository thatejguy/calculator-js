//selectors
const display = document.querySelector('.display')

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
    }
  })
})







