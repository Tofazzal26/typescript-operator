"use strict";
// let a = "tofazzal";
const myFunc = (id, user) => {
    return `My name is ${user.name} and my age is ${user.age} my id: ${id}`;
};
console.log(myFunc(2, { name: "Tofazzal", age: 34 }));
