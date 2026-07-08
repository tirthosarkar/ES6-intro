const king = { name: 'King', age: 50, title: 'The Great' };
object.freeze(king);
delete king.age;
delete king.title;
king.queen = 'Queen';
king.name = 'King of the North';
console.log(king);