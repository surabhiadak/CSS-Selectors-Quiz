var readlineSync = require('readline-sync');

 
var userName = readlineSync.question ('What is your name? ');
var score= 0;

//chalk package
const chalk = require("chalk");
const log = console.log;

log(chalk.yellow("Hi" + userName + "Welcome to CSS Selectors Quiz"))

//highscores
var highScores =
[
  {
    name: "Surabhi",
    score: "4"
  },
  {
    name: "Swarangi",
    score: "3"
  }
]

//Function
function play(question,answer)
{
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer)
  {
    log(chalk.green("YAY! You are right"))
    score= score+1;
  }
  else
  {
    log(chalk.red("OOPS! You are wrong"))
    score= score-1;
  }
  log(chalk.green("Your score is: "+score))
  log(chalk.green("--------------------------"))
}

//Array of objects
var questions =
[
  {
    question: "Which selector selects all elements that have the given class attribute? \n a: ID selector \n b: Class selector \n c: Type selector \n",
    answer: "b"
  },
  {
    question: "Which selector selects all elements? \n a: Universal selector \n b: Class selector \n c: ID selector \n",
    answer: "a"
  },
  {
    question: "Which selector selects all elements that have the given node name? \n a: ID selector \n b: Universal selector \n c: Type selector \n",
    answer: "c"
  },
  {
    question: "Which selector selects an element based on the value of its id attribute? \n a: ID selector \n b: Class selector \n c: Universal selector \n",
    answer: "a"
  }
]

//for loop 
for (var i=0;i<questions.length;i++)
{
  currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

//Print the final score
log(chalk.yellow("YAYYY! Your final score is: " +score))

log(chalk.white("-----------------------------------------------"))

//Print the highest scores 

log(chalk.blue("Here are the highest scores: "))
for (var i=0;i<highScores.length;i++)
{
  var currentScore = highScores[i]
  console.log (currentScore.name)
  console.log (currentScore.score)
}
