let obj = {
  a: 20,
  b: 30,
};

function tester(a, b) {
  return `a: ${this.a} b: ${this.b} | other a: ${a} b: ${b}`;
}


// let bindObj = tester.bind(obj, 100, 200);
// console.log(tester.call(obj, 50, 80));
// console.log(tester.apply(obj, [50, 80]));
// console.log(bindObj());

// polyfills;

Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};



//call

Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};

// apply

Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};

//bind



console.log(tester.myCall(obj, 50, 80));
console.log(tester.myApply(obj, [50, 80]));
let bindObj2 = tester.myBind(obj, 100, 200);
console.log(bindObj2());
