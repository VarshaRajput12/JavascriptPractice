// // polyfill for map
let arr = [2, 5, 8, 10, 24, 13, 15];
// let result = arr.map((ele, i, arr)=>{
//     return ele*2
// })

// console.log(result)

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

let result2 = arr.myMap((ele, i, arr) => {
  return ele * 2;
});

console.log(result2);
