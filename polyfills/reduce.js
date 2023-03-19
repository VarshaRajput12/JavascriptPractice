// reduce polyfill 

let arr = [2, 2, 1, 5];

// let sum = arr.reduce((acc,pre)=>{
//     return acc + pre
// },0)

// console.log(sum)

Array.prototype.myReduce = function (callback, initialValue = null) {
  let accumlator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumlator = callback(accumlator, this[i], i, this);
  }
  return accumlator;
};

let sum = arr.myReduce((acc, pre) => {
  return acc + pre;
}, 0);

console.log(sum);
