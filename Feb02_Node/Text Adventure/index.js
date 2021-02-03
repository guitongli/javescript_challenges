const chalk = require("chalk");
const { rawListeners } = require("process");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const conversation = {
    q: "I need some advice. Can you help me?",
    answers: {
        yes: {
            q:
                "My partner wants to go back to his x-girlfriend, should I give up the relationship?",
            answers: {
                yes: {
                    q: "but I still want him back, should I call him?",
                    answers: {
                        yes: {
                            q: "this hurts",
                            // answers: {
                            //     quit: undefined,
                            //     startagain: undefined,
                            // },
                        },
                        no: {
                            q: "thanks",
                            // answers: {
                            //     quit: undefined,
                            //     startagain: undefined,
                            // },
                        },
                    },
                },
                no: { q: "but this is not fair to me" },
            },
        },
        no: { q: "I am busy as hell too" },
    },
};

function askQuestion(obj) {
    readline.question(`${chalk.blue(obj.q)}\n`, (answer) => {
        if (answer == "yes") {
            askQuestion(obj.answers[answer]);
            if (!obj.answers[answer].answers) {
                readline.close();
            }
        } else if (answer == "no") {
            askQuestion(obj.answers[answer]);

            if (!obj.answers.no.answers) {
                readline.close();
            }
        } else {
            askQuestion(obj);
        }
    });
}
askQuestion(conversation);
