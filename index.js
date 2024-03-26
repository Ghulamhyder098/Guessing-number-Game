// let guessNum = "14";
// let answer = prompt("Guess The number");
// // while (guessNum !== answer) {
// //     answer = prompt("Try Again");
// // }
// let i=0
// for (i=0;guessNum!==answer;i++){
//     answer=prompt("Try Again")
// }
// console.log("Congratulations You Enter Right Number");
import inquirer from "inquirer";
let random = Math.floor(Math.random() * 10 + 1);
// console.log(random);
let answer = await inquirer.prompt([{ message: "Guess The number B/w 1-10", type: "number", name: "number" }]);
// console.log(answer)
if (random === answer.number) {
    console.log("Congratulation");
}
else if (answer.number > 10) {
    console.log("Please Input Valid Number");
}
else {
    console.log("Try Again");
}
