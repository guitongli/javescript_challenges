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
                            answers: {
                                yes: undefined,
                                no: undefined,
                            },
                        },
                        no: {
                            q: "thanks",
                            answers: {
                                yes: undefined,
                                no: undefined,
                            },
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
    readline.question(
        `${chalk.blue(obj.q)} ${chalk.green(
            "[ " + Object.keys(obj.answers).join(" | ") + " ]"
        )}\n`,
        (answer) => {
            if (answer == "yes") {
                askQuestion(obj.answers.yes);
                if (obj.answers[answer].answers.yes == undefined) {
                    readline.close();
                }
            } else if (answer == "no") {
                askQuestion(obj.answers.no);
                if (!obj.answers.no.answer) {
                    if (!obj.answers.no.answers.no == undefined) {
                        readline.close();
                    }
                }
            } else {
                askQuestion(obj);
            }
        }
    );
}
askQuestion(conversation);
