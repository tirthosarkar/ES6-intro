const employee = {
  name: "John Doe",
  1: 'desk one',
  "home address": "123 Main St",
  salary: 50000,
  family: {
    father: "John Doe Sr.",
    spouse: "Jane Doe",
    children: {
      name: 'jane doe'
      age: 10
    }
  },
  position: "Software Engineer"
};

console.log = employee.name; // Output: John Doe
console.log(employee.family.children.name); // Output: jane doe