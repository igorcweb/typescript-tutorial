var john = {
    name: 'John Doe',
    age: 20,
    canDrink: function (age) { return age >= 21; }
};
john.age = 21;
console.log(john.canDrink(john.age));
// let name: string;
// name = 'John';
// let age = 22;
// let isTrue: boolean = true;
// isTrue = false;
// function sayHi(): void {
//   console.log("Hi");
// }
