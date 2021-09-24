//---------------------------- Spread Object -----------------------------//
const person = {
  username: "Prae",
  age: 26,
};

const a = "Phot";

const copyPerson = { ...person, a };
console.log("copyPerson", copyPerson);

//---------------------------- Rest Parameters -----------------------------//
const add = (...number: number[]) => {
  return number.reduce((total, num) => {
    return total + num;
  }, 0);
};

const addedNumbers = add(3, 6, 8, 9, 0, 3);
console.log("addedNumbers", addedNumbers);
//---------------------------- Rest Parameters -----------------------------//

//---------------------------- Destructuring -----------------------------//
const hobbies = ["sport", "play game", "plant", "pet care"];
const activeHobbies = ["learn about code"];

const [hobby1, hobby2, ...other] = hobbies;
console.log("hobby1 is :", hobby1);
console.log("hobby2 is :", hobby2);
console.log("other is", other);

const { username: nickname, age } = person;
console.log(nickname, age);
