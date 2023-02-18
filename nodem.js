// const fs = require("fs");
// const http = require("http");
// const myfile = fs.createWriteStream("myfile.json");
// // http.get("http://fakestoreapi.com/products", (res) => {
//   res.pipe(myfile);
// });
// let ans = "";
// http
//   .get("http://fakestoreapi.com/products")
//   .on("data", (chunk) => {
//     ans += chunk;
//   })
//   .on("end", () => {
//     console.log(ans);
//   });

// http.get("http://fakestoreapi.com/products", (res) => {
//   let data = "";
//   res.on("data", (chunk) => {
//     data += chunk;
//   });
//   res.on("end", () => {
//     console.log(data);
//   });
// });

// function check(...ans) {
//   console.log(ans);
// }
// check(1, 2, 3, 4, 5);

// s - 1000
// i - 100
// c - 10  : p class
// t - 1   : p element
// u - 0
