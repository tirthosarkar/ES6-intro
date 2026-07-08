const king = { name: 'King', age: 50, title: 'The Great' };
delete king.age;
delete king.title;
king.queen = 'Queen';
console.log(king);