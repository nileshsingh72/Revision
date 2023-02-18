// let radius = [1, 4, 6];

// function area(val) {
//   return Math.PI * (val * val);
// }
// function calArea(arr, logic) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(logic(arr[i]));
//   }
//   return ans;
// }

// console.log(calArea(radius, area));
// console.log("lkj");

// console.log(radius.map(area));

// function calCircum(arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(2 * Math.PI * arr[i]);
//   }
//   return ans;
// }

// console.log(calCircum(radius));
// function calDia(arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(2 * arr[i]);
//   }
//   return ans;
// }

// console.log(calDia(radius));

// let arr = [2, 3, 4];
// let ans = arr.reduce((acc, curr) => (acc *= curr), 1);
// console.log(ans);

// reduce max number

// let arr = [2, 3, 4];
// let ans = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     return (acc = curr);
//   }
// }, -Infinity);
// console.log(ans);

// challenge ex
// let user = [
//   { name: "nilesh", lastname: "singh", age: 23 },
//   { name: "nilesh", lastname: "singh1", age: 25 },
//   { name: "nilesh", lastname: "singh2", age: 27 },
//   { name: "nilesh", lastname: "singh3", age: 27 },
//   { name: "nilesh", lastname: "singh4", age: 27 },
//   { name: "nilesh", lastname: "singh5", age: 23 },
//   { name: "nilesh", lastname: "singh6", age: 21 },
// ];

// let obj = {};

// user.forEach((el) => {
//   if (!obj[el.age]) {
//     obj[el.age] = 1;
//   } else {
//     obj[el.age]++;
//   }
// });
// console.log(obj);
// let fin = [];
// let ans = user.reduce((acc, curr) => {
//   if (curr.age === 23) {
//     fin.push(curr.name);
//   }
// }, []);
// console.log(fin);

// async function getdata() {
//   let url = "http://api.github.com/users";
//   let res = await fetch(url);
//   return res.json();
// }
// getdata().then((data) => console.log(data));
// const num = 2;
// function myfun() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num == 2) resolve();
//       else reject();
//     }, 5000);
//   });
// }

// const myfun = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => (num == 2 ? resolve() : reject()), 5000)
//   );

// myfun()
//   .then(() => console.log("resolved"))
//   .catch((err) => console.log(err));
// cm;

// let obj = { name: "nil" };
// let arr = [obj];
// obj = null;
// let str = "klj";
// console.log(!typeof !str);

// console.log(a);
// const a = 10;
// console.log(a);
// greet();
// function greet() {
//   console.log("Hello PUBLIC!");
// }

// let me = "nilesh";
// in case of const and let hoist happen's in different way

// console.log(a);
// let a = 10;
// console.log(a);

// FUNCTION EXPRESSION

// function myfun() {
//   console.log("function expression");
// }
// myfun();

// (function () {
//   console.log("Welcome");
// })();

// function x() {
//   let a = 10;

//   return function y() {
//     console.log(a);
//   };
// }

// let ans = x();
// ans();
