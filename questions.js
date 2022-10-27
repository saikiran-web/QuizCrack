// creating an array and passing the number, questions, options, and answers

let questions = [
  {
  numb: 1,
  question: "In which element we put javascript?",
  answer: "script",
  options: [
    "javascript",
    "scriptin",
    "script",
    "none of these"
  ]
},
{
numb:2,
question : "What does HTML stand for?",
answer : "Hypertext Markup Language",
options : [
         "Hypertext Markup Language",
        " Hypertool Markup Language ",
        " Hypertrend Markup Language ",
        "abc"
]
},
{
numb:3,
 question: "Which one of the following also known as Conditional Expression:",
 answer:"immediate if",
 options: [
  "Alternative to if-else" ,
  "Switch statement" ,
  "If-then-else statement",
  "immediate if"
 ]
},
{
numb:4,
question : "What do you understand by HTML?",
answer : "All of the above",
options : [
  "HTML describes the structure of a webpage",
  "HTML is the standard markup language mainly used to create web pages",
  "HTML consists of a set of elements that helps the browser how to view the content",
  "All of the above"
]
},
{
numb:5,
question : "Who is the father of HTML?",
answer : "Tim Berners-Lee",
options : [
  "Rasmus Lerdorf",
  "Tim Berners-Lee",
  "Brendan Eich",
  "Sergey Brin"
]

}

 /* {
  numb: 2,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  options: [
    "Common Style Sheet",
    "Colorful Style Sheet",
    "Computer Style Sheet",
    "Cascading Style Sheet"
  ]
},
  {
  numb: 3,
  question: "What does PHP stand for?",
  answer: "Hypertext Preprocessor",
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor"
  ]
},
  {
  numb: 4,
  question: "What does SQL stand for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language"
  ]
},
  {
  numb: 5,
  question: "What does XML stand for?",
  answer: "eXtensible Markup Language",
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
{
  numb: 6,
  question: " Which of the following is an IF statement in JavaScript",
  answer: " if (i == 5)",
  options: [
    "if i = 5",
    " if (i == 5)",
    " if i = 5 then",
    "eXamine Multiple Language"
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },

*/
];

//creates random index between 0 and the length of any array passed into it
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

//uses getRandomIndex to generate select a random object from and array. Also checks to see if the random object has been selected, if not, pushes the question to the empty selectedQuestions array and if selected, loops through its own function with a recursion by calling itself until it finds a question that has not already been pushed to the selectedQuestions array.
const getRandomObject = (arr) => {
  const random = getRandomIndex(arr);
  if (questions.includes(random)) {
    return getRandomObject(arr);
  }
  questions.push(random);
  console.log("selected questions:", questions.length)
  return arr[random];

  //renders the selected array and questions in the correct section of the quiz board.
  const randomGenerator = () => {
    const data = getRandomObject(questions);
    progress.textContent = `Question ${gameState.questionCounter} of ${maxQuestion}`
    questionBoard.textContent = `Q${gameState.questionCounter}. ${data.question}`;
    currentCorrectAnswer = data.answer;
    userAnswer.forEach((answer, index) => {
      answer.innerHTML = `${alphabet[index]}. ${data.choices[index]}`;
    });
    currentUserAnswer = null;
    clearAll()

    gameState.questionCounter++
      nextBtn.disabled = true;

    setDisabledStateForQuizAnswers(false);
  }
}