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
const populate = (value) => {
  if (display.innerText == '00') {
    display.innerText ='';
  };
  if (num1.length <= 10) {
    num1 += value;
  }
  display.innerText = `${num1}${operator}${num2}`;

};


const nums = Array.from(document.querySelectorAll('.num'));
nums.forEach(element => {
  element.addEventListener('click', ev => populate(ev.target.innerText));
});
