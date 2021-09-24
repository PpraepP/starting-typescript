let userInput: unknown;
let userInput2: any;
let userName: string;

userInput = 5;
userInput = 2;
// userInput = "Prae";
// userInput2 = "Phot";

if (typeof userInput === "string") userName = userInput; // string = unknow
console.log("userName1", userName);

userName = userInput2; // string = any
console.log("userName2", userName); // if send number to userName: type > "string" it's does'n show err may be bug

function generateErr(message: string, code: number): never {
  throw { message: message, errCode: code };
}
generateErr("An error occurred", 500);
const res = generateErr("An error occurred", 500);
console.log(res);
