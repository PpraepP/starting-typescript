function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result:", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(12, 14, (result) => {
  console.log(result);
  return true;
});

printResult(add(4, 21));

let combineValue: Function;
let combineValue2: (a: number, b: number) => number;

combineValue = add;
combineValue2 = add;
// combineValue = printResult;

console.log("combineValue", combineValue(4, 5));
console.log("combineValue2", combineValue2(5, 10));
