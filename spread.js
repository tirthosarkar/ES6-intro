const max = Math.max(3, 5, 7, 2, 58 );
// console.log(max);

const numbers = [3, 5, 7, 2, 58];
const max2 = Math.max(...numbers);
// console.log(...numbers);

const params = [3, 5, 7, 2, 58];
function sum(x, y, z) {
  console.log(x, y, z);
  return x + y + z;
}
const result = sum(...params)
// console.log(result);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1)
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [11, ...arr1, 4, 5, 6];
// arr2.push(4);
// console.log(arr1)
// console.log(arr2);

const person = { name: 'John', age: 30 };
// const person2 = person;
const person2 = { ...person , designation: 'Developer' };
person.salary = 50000;
console.log(person);
console.log(person2);
