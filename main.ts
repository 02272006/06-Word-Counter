// INSTALLATION
import inquirer from "inquirer";
import chalk from "chalk";

console.log (chalk.yellow.bold(`WELCOME TO WORD COUNTER!`))
const ans : {
    sentence : 'string',
} = await inquirer.prompt({
    name : "sentence",
    type : "input",
    message: chalk.blue.italic("Please write a sentence and I'll count the words!"),
});

const word = ans.sentence.trim().split(" ");
console.log (chalk.blue.italic(`The words counted by Word counter are: ${word.length}`));