const readline = require('readline-sync');

interface Question {
  question: string,
  answer: boolean,
}
function testFaith(questions: Question[]) {
  for (let i: number = 0; i < questions.length; i += 1) {
    const answers = readline.keyInYN(questions[i].question);

    if (answers === questions[i].answer) {
      console.log('Correct answer.');
    } else {
      console.log('The answer is wrong!');
    }
  }
}

export default testFaith();
