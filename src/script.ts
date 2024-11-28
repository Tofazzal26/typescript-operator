// let a = "tofazzal";

// a = "abir";

// console.log(a);

// let a: string

// a = "to"

// let a = 20

// a = "hello"

// let a: object;

// a = {
//   name: "tofazzal",
//   age: 20,
//   adult: true,
// };

// let a: {
//   name: string;
//   age: number;
//   adult: boolean;
// };

// a = { name: "abir", age: 20, adult: false };

// let a: [] = [];

// let a: (string | number | boolean)[] = [];

// a.push(22);
// a.push("abir");
// a.push(true);

// let a: any;

// a = "abir";

// a = { name: "tofazzal" };

// a = [2, 3, 5, 8];

// let a:any = []

// let a: any[] = [];

// a.push(1, 3);

// console.log(a);

// let myFunc: Function;

// myFunc = (a: number, b: number, c: string = "abir"): Number => {
//   console.log(c);
//   return a + b;
// };

// console.log(myFunc(2, 4, "tofazzal"));

type stringOrNumber = string | number;
type userNameOrAge = { name: string; age: number };

const myFunc = (id: stringOrNumber, user: userNameOrAge) => {
  return `My name is ${user.name} and my age is ${user.age} my id: ${id}`;
};

console.log(myFunc(2, { name: "Tofazzal", age: 34 }));
