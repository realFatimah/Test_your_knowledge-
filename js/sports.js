const quizData = [
    {
      question: 'What sport is considered the most popular in the world?',
      options: ['Basketball', 'Golf', 'Tennis', 'Football'],
      answer: 'Football'
    },
    {
      question: 'What kind of sport is connected with the term “ring”?',
      options: ['Tennis', 'Water polo', 'Boxing', 'Figure skating'],
      answer: 'Boxing'
    },
    {
      question: 'What game is called the “sport of kings”?',
      options: ['Chess', 'Tennis', 'Football', 'Hockey'],
      answer: 'Chess'
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
  