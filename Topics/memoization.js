// memoization :- memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.
let sum = 0;

const calcSum = (num) => {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
// console.log(calcSum(6))
function memoize(fun) {
  let cache = {};
  return (n) => {
    if (cache[n]) {
      return `${cache[n]} from cache`;
    } else {
      let result = fun(n);
      cache[n] = result;
      return `${result} from result`;
    }
  };
}
let memo1 = memoize(calcSum);

console.log(memo1(6));
console.log(memo1(6));
