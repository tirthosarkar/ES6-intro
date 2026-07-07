console.log(add(10, 20));
//function declaration
function add(num1, num2) {
  return num1 + num2;
}

// console.log(add2(30, 40));
//arrow expression
const add2 =function (num1, num2) {
  return num1 + num2;
}
// consle.log(add2(30, 40));

//arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

const multiply = (num1, num2) => num1 * num2;

const tenTimes = (num) => num * 10;
const tenTimes2 = num => num * 10;
const getpi = () => 3.14;
const addAll = (num1, num2, num3) => num1 + num2 + num3;

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
}

const divide = (x, y) => x / y;

document.getElementById('btn').addEventListener('click', () => { })

document.getElementById('btn').addEventListener('click', (event) => {});