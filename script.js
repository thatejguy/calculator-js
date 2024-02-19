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

//selectors
let display = document.querySelector('.display');


//buttons
let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  display.textContent = 0;
})


//numbers
let one = document.getElementById("one");
one.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 1;
  } else {
    display.textContent += 1;
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