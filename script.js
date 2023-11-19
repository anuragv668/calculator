const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

let num1 = '';
let num2 = '';
let operator = '';

const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
};

const display = document.querySelector('.display');
let storeExpression = '';
const populate = (value) => {
  storeExpression += value;
  display.innerText = `${storeExpression}`;
};


const nums = Array.from(document.querySelectorAll('.num'));
nums.forEach(element => {
  element.addEventListener('click', ev => populate(ev.target.innerText));
});

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(element => {
  element.addEventListener('click', ev => {
    if (operator == '') {
      operator = ev.target.innerText;
      num1 = storeExpression;
      populate(ev.target.innerText)
    }
  });
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  storeExpression = '';
  display.innerText = '00';
});

