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
const buttons = {
  one() {
    let one = document.querySelector('.one');
    one.addEventListener('click', () => {
      console.log('one');
      display.textContent += '1';
    })
  },
  two() {
    let two = document.querySelector('.two');
    two.addEventListener('click', () => {
      console.log('two');
      display.textContent += '2';
    })
  },
}

buttons.one();
buttons.two();





