const employee = {
  name: "John Doe",
  1: 'desk one',
  "home address": "123 Main St",
  position: "Software Engineer"
};  

//dot bracket notation


console.log(employee["name"]); // Output: John Doe  
console.log(employee["position"]); // Output: Software Engineer
console.log(employee["1"]); // Output: desk one
console.log(employee["home address"]); // Output: 123 Main St

const money = 50000;
const key = "position";
employee["salary"] = money;
employee[key] = "Senior Software Engineer";
console.log(employee["key"]); // Output: 50000




