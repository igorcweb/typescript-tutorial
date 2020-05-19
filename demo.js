var john = {
    name: 'John Doe',
    age: 22,
    canDrink: function (age) {
        return age >= 21;
    }
};
console.log(john.canDrink(john.age));
// const validateObj = (obj: IObject) => {
//   return obj;
// };
// validateObj(obj);
// console.log("test");
