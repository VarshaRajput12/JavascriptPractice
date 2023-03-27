// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "68d16905e4msh7755e13402f176ep1f5f18jsn99ccb3d82956",
//     "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

let obj1 = { a: 10, b: 5, c: 3 };
let obj2 = { a: 15, b: 5, c: 3, e: 8 };

// output = {b: 5, c: 3}

// let keysOfObj1 = Object.keys(obj1)
// let keysOfObj2 = Object.keys(obj2)

// console.log(keysOfObj1)
// console.log(keysOfObj2)

for (let keys in obj1) {
  console.log(obj2[keys]);
}
