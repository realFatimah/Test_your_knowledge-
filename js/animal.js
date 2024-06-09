const quizData = [
    {
      question: 'Which animal is called Joey?',
      options: ['Cheetah', 'Baby kangaroo', 'Ostrich', 'Panda'],
      answer: 'Baby kangaroo'
    },
    {
      question: 'Which is the only mammal that can fly?',
      options: ['Ostrich', 'Bat', 'Hummingbirds', 'Dinosar'],
      answer: 'Bat'
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Giraffe', 'Whale', 'Hippo'],
      answer: 'Whale'
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const feedbackElement = document.getElementById('feedback');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
  
    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    let feedback = document.createElement('div');
    feedback.classList.add('feedback');
  
    if (selectedOption === currentQuizData.answer) {
      score++;
      feedback.innerHTML = '<strong style="font-size: 1.2em; color: green;">Correct!</strong>';
    } else {
      feedback.innerHTML = '<strong style="font-size: 1.2em; color: red;">Wrong!</strong>';
    }
  
    optionsContainer.innerHTML = ''; // Clear options
    quizContainer.appendChild(feedback); // Display feedback
  
    setTimeout(() => {
      feedback.remove(); // Remove feedback
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }, 1000); // Delay for 2 seconds before moving to the next question
  }
  
  function endQuiz() {
    quizContainer.innerHTML =
    ` <h2>Quiz Completed</h2>
      <p>Your score: ${score}/${quizData.length}</p>
      <button class="reset-button" onclick="location.reload()">Restart Quiz</button>`;
  }
  
  loadQuestion();
  