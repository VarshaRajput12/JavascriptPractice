//polyfill for filter

let arr = [2, 5, 8, 10, 24, 13, 15];
// let newArr = arr.filter((ele, i, arr)=>{
//   return ele % 2 === 0
// })

// console.log(newArr)

Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

let newArr = arr.myFilter((ele, i, arr) => {
  return ele % 2 !== 0;
});

console.log(newArr);