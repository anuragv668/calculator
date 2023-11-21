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
  let lengthTest = '' + (a / b);
  if (lengthTest.length > 8) {
    return (a / b).toFixed(1);
  }
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
    case 'x':
      return multiply(num1, num2);
      break;
    case '/':
      if (num2 == 0) {
        return 'ERROR';
      }
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

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  storeExpression = '';
  operator = '';
  num1 = '';
  num2 = '';
  display.innerText = '00';
});


const nums = Array.from(document.querySelectorAll('.num'));
nums.forEach(element => {
  element.addEventListener('click', ev => populate(ev.target.innerText));
});

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(element => {
  element.addEventListener('click', ev => {
    if (operator == '') {
      populate(ev.target.innerText);
      operator = ev.target.innerText;
    } else if (storeExpression.slice(-1) == '+' || storeExpression.slice(-1) == '-' || storeExpression.slice(-1) == 'x' || storeExpression.slice(-1) == '/') {
      storeExpression = storeExpression.slice(0, -1);
      populate(ev.target.innerText);
      operator = ev.target.innerText;
    } else {
      evaluate();
      populate(ev.target.innerText);
    }
  });
});

const evaluate = () => {
  const oindex = storeExpression.indexOf(operator);
  if (oindex !== -1) {  
    num1 = storeExpression.slice(0, storeExpression.indexOf(operator));
    num2 = storeExpression.slice(storeExpression.indexOf(operator) + 1);
    if (num1 != '' && num2 != '') { 
      storeExpression = '';
      populate(operate(+num1, +num2, operator));
    }
  }
}


const total = document.getElementById('total');
total.addEventListener('click', () => {
  evaluate();
  num1 = '';
  num2 = '';
  operator = '';
});

