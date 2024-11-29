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
// type stringOrNumber = string | number;
// type userNameOrAge = { name: string; age: number };
// const myFunc = (id: stringOrNumber, user: userNameOrAge): string => {
//   return `My name is ${user.name} and my age is ${user.age} my id: ${id}`;
// };
// console.log(myFunc(2, { name: "Tofazzal", age: 34 }));
// let myFunc: (a: number, b: number, c: { name: string; age: number }) => number;
// myFunc = (
//   age: number,
//   height: number,
//   userInfo: { name: string; age: number }
// ) => {
//   if (userInfo.age === 20) {
//     return age + height;
//   } else {
//     return age - height;
//   }
// };
// console.log(myFunc(20, 6, { name: "abir", age: 20 }));
// class Player {
//   name: string;
//   age: number;
//   country: string;
//   constructor(a: string, b: number, c: string) {
//     this.name = a;
//     this.age = b;
//     this.country = c;
//   }
//   play() {
//     console.log(
//       `My name is ${this.name}, and my age is ${this.age}, my country is ${this.country}`
//     );
//   }
// }
// const test = new Player("Abir", 44, "Bangladesh");
// const another: Player[] = [];
// another.push(test);
// console.log(test.country);
// console.log(another());
// class Science {
//   constructor(
//     public name: string,
//     private age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(
//       `My name is ${this.name}, and my age is ${this.age}, my country is ${this.country}`
//     );
//   }
// }
// const testing = new Science("abir", 20, "bangladesh");
// const test: Science[] = [];
// test.push(testing);
// console.log(testing);
// console.log(testing.age);
// const addUser = <T>(obj: T) => {
//   const id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// const user = {
//   name: "abir",
//   age: 20,
//   country: "bd",
// };
// console.log(addUser(user));
// interface apiResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }
// const response: apiResponse<object> = {
//   status: 200,
//   type: "good",
//   data: { name: "abir", age: 20 },
// };
// console.log(response);
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["AUTHENTICATED"] = 1] = "AUTHENTICATED";
    RType[RType["FAILURE"] = 2] = "FAILURE";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const responseData = {
    status: 200,
    type: RType.SUCCESS,
    data: { name: "Abir", age: "20" },
};
console.log(responseData);
export {};
