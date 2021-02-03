const chalk = require("chalk");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`What's your name?`, (name) => {
    console.log(chalk.blue(`Hi ${name}!`));
    readline.close();
});
