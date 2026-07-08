const king = { name: 'King', age: 50, title: 'The Great' };
delete king.age;
delete king.title;
king.queen = 'Queen';
king.name = 'King of the North';
console.log(king);