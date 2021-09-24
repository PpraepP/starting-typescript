//set custom type
type Combinable = number | string;
type ConversionDesciptor = "as-number" | "as-text";

function combine(
  //   input1: number | string,
  //   input2: number | string | boolean,

  //use custom type
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDesciptor
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toLocaleString() + input2.toLocaleString();
  }
  return result;
}

const combineAges1 = combine(30, 20, "as-number");
console.log(combineAges1);

const combineAges2 = combine("30", "20", "as-number");
console.log(combineAges2);

const combineAges3 = combine("pppp", "tttt", "as-text");
console.log(combineAges3);

//------------------------ learning enum types ----------------------------//
// enum Role { ADMIN, READ_ONLY, AUTHOR }

// const person = {
//     name: "Praeploy",
//     age: 25,
//     hobbies: ['Sports', 'Play game'],
//     role: Role.ADMIN
// }

// if(person.role === Role.ADMIN) console.log('is admin');

//------------------------ learning array and tuple types ----------------------------//
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// const person = {
//     name: "Praeploy",
//     age: 25,
//     hobbies: ['Sports', 'Play game'],
//     role: [2, 'author']
// }

// person.role.push('admin'); // this is SHOULD to be error but not
// person.role[1] = 10; // this ERROR!
// person.role = [1, 'admin', 'eieie']; // Source has 3 element(s) but target allows only 2.

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// }

// person.role.map(item => console.log(item))

//********************** this is type string array **********************//
// let favoriteActivities: string[];
// favoriteActivities = ['Sports', 'Cooking']

//********************** this is multi type array **********************//
// let favoriteActivities: (string | number)[];
// favoriteActivities = ['Sports', 'Cooking', 100];

//********************** this is all type in array **********************//
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 'Cooking', 100];

//------------------------ learning object types ----------------------------//
// const person: {
//     name: string;
//     age: number;
// } = {
// const person = {
//     name: "Praeploy",
//     age: 25
// }

// console.log(person.name);

//------------------------ learning normal types => string, number, boolean ----------------------------//
// function add(n1: number, n2: number, showResult: boolean, phrase: string){
//     const result = n1 + n2;
//     if(showResult){
//         console.log(phrase + result);
//     }else{
//         return n1 + n2;
//     }
// }

// let number1: number;
// number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// let resultPhrase: string = "Result is:";

// add(number1, number2, printResult, resultPhrase);
