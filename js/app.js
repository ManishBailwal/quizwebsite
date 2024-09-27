const questions = [
    {
        'que': "Which of the following is a markup language?",
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct': 'a'
    },
    {
        'que': "What does CSS stand for?",
        'a': 'Cascading Style Sheets',
        'b': 'Computer Style Sheets',
        'c': 'Creative Style Sheets',
        'd': 'Colorful Style Sheets',
        'correct': 'a'
    },
    {
        'que': "Which HTML tag is used to define an internal style sheet?",
        'a': '<style>',
        'b': '<script>',
        'c': '<css>',
        'd': '<link>',
        'correct': 'a'
    },
    {
        'que': "Which of the following is not a database?",
        'a': 'MySQL',
        'b': 'MongoDB',
        'c': 'PostgreSQL',
        'd': 'React',
        'correct': 'd'
    }
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }

    const data = questions[index];
    
    quesBox.innerText = `${index+1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    if (index == total) {
        return endQuiz();
    }
    
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans);
    
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    reset();
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    );
    console.log("Selected Answer:", answer || "No answer selected");
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `

        
        <h3>Thanks for playing the Quiz</h3>
        <h2>${right} / ${total} are correct</h2>
        
        
    `;

    // Set background image using inline CSS
    document.getElementById('box').style.backgroundImage = "url('../congrats.gif')";
    document.getElementById('box').style.backgroundSize = "cover"; // Adjust the image to cover the entire box
    document.getElementById('box').style.backgroundPosition = "center"; // Center the background image
};

loadQuestion();
