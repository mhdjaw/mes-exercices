var readline = require('readline-sync');
function testFaith(questions) {
    for (var i = 0; i < questions.length; i += 1) {
        var answers = readline.keyInYN(questions[i].question);
        if (answers === questions[i].answer) {
            console.log('Correct answer.');
        }
        else {
            console.log('The answer is wrong!');
        }
    }
}
var questions = [
    {
        question: 'The Four Champions are named Urbosa, Daruk, Revali and Malon. Yes or no?',
        answer: false
    },
    {
        question: 'The Divine Beast Vah Medoh resembles an elephant. Yes or no?',
        answer: false
    },
    {
        question: 'The King of Hyrule is named King Rhoam? Yes or no?',
        answer: true
    },
];
testFaith(questions);
