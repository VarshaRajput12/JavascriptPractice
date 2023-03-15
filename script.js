
// ===============================================================================================================

//=======================================================================================================

// let arr = [2, 5, 8, 10, 24, 13, 15];
// // polyfill for map
// // let result = arr.map((ele, i, arr)=>{
// //     return ele*2
// // })

// // console.log(result)

// Array.prototype.myMap = function(callback){
//     let newArr = [];

//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i], i, this)){
//             newArr.push(this[i])
//         }
//     }
//     return newArr
// }

// let result = arr.myMap((ele, i, arr) => {
//   return ele * 2;
// });

// console.log(result);