// Data for Quizz Questions

  const quizzData = [
    {
        question: 'What does HTML stand for?',
        a: 'Home Tool Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Hyper Text Markup Language',
        d: 'Hyper token make language',
        correct: 'c',
    },
    {
        question : 'What is 3+6/2?',
        a: '4.5',
        b: '50',
        c: '10',
        d: '6',
        correct: 'd',
    },
    {
        question : 'What does CSS stand for?',
        a: 'Computer Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Colorful Style Sheets',
        d: 'Creative Style Sheets',
        correct: 'b',
    },
    {
        question : 'What does JSON stand for?',
        a: 'Javascript Object Notation',
        b: 'Java Sequelize Object Notation',
        c: 'Java Standard Object Notation',
        d: 'Java Structured Object Notation',
        correct: 'a',
    },
    {
        question : 'What does SQL stand for?',
        a: 'Structured Question Language',
        b: 'Structured Query Language',
        c: 'Strong Question Language',
        d: 'Sequelize Language',
        correct: 'b',
    },
];
const questionElem = document.getElementById('question');
const submitBtn = document.getElementById('submit');

a_text  = document.getElementById('a_text');
b_text  = document.getElementById('b_text');
c_text  = document.getElementById('c_text');
d_text  = document.getElementById('d_text');

let currentQuizz = 0;

loadQuizz();

function loadQuizz(){
    const currentQuizzData = quizzData[currentQuizz];
    questionElem.innerText = currentQuizzData.question;
    
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;

}

submitBtn.addEventListener("click", () =>{
    currentQuizz++;

    if( currentQuizz < quizzData.length ){
        loadQuizz();
    }
    else{
        alert("Thank you for attempting Quizz");
    }
});
