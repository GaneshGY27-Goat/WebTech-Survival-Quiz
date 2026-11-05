// Bank of 50 Web Technology Questions
const rawQuizData = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<style>", "<link>"],
    answerIndex: 2
  },
  {
    question: "Which property is used in CSS Flexbox to align items along the cross axis?",
    options: ["justify-content", "align-items", "flex-direction", "align-content"],
    answerIndex: 1
  },
  {
    question: "Which JavaScript method is used to repeatedly execute a function at specified intervals?",
    options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "setImmediate()"],
    answerIndex: 1
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"],
    answerIndex: 1
  },
  {
    question: "Which CSS display value enables a grid formatting context for direct children?",
    options: ["display: flex", "display: inline-block", "display: grid", "display: table"],
    answerIndex: 2
  },
  {
    question: "What does the 'typeof null' expression evaluate to in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    answerIndex: 2
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image if it cannot be displayed?",
    options: ["title", "src", "alt", "description"],
    answerIndex: 2
  },
  {
    question: "Which CSS selector has the highest specificity?",
    options: ["Class selector (.nav)", "Element selector (div)", "ID selector (#header)", "Universal selector (*)"],
    answerIndex: 2
  },
  {
    question: "Which array method creates a new array populated with the results of calling a provided function on every element?",
    options: ["forEach()", "filter()", "map()", "reduce()"],
    answerIndex: 2
  },
  {
    question: "Which HTML5 semantic element is intended to encapsulate a self-contained composition?",
    options: ["<div>", "<section>", "<article>", "<aside>"],
    answerIndex: 2
  },
  {
    question: "What is the default position value of an HTML element in CSS?",
    options: ["relative", "absolute", "static", "fixed"],
    answerIndex: 2
  },
  {
    question: "Which JavaScript operator checks for both value and type equality?",
    options: ["==", "===", "=", "!="],
    answerIndex: 1
  },
  {
    question: "Which HTTP status code signifies that a requested resource was not found?",
    options: ["200", "301", "404", "500"],
    answerIndex: 2
  },
  {
    question: "In CSS Box Model, which layer is immediately outside the padding?",
    options: ["Margin", "Border", "Content", "Outline"],
    answerIndex: 1
  },
  {
    question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answerIndex: 2
  },
  {
    question: "Which DOM method returns the first element matching a specified CSS selector?",
    options: ["document.getElementById()", "document.querySelectorAll()", "document.querySelector()", "document.getElementsByClassName()"],
    answerIndex: 2
  },
  {
    question: "What does CSS 'z-index' control?",
    options: ["Opacity of an element", "Vertical stacking order", "Font zoom level", "Horizontal positioning"],
    answerIndex: 1
  },
  {
    question: "Which JavaScript method removes the last element from an array and returns that element?",
    options: ["shift()", "pop()", "unshift()", "push()"],
    answerIndex: 1
  },
  {
    question: "Which HTML tag is used to embed client-side vector graphics directly in markup?",
    options: ["<canvas>", "<svg>", "<img>", "<graphic>"],
    answerIndex: 1
  },
  {
    question: "Which CSS unit is relative to the font-size of the root element (<html>)?",
    options: ["em", "rem", "vh", "%"],
    answerIndex: 1
  },
  {
    question: "What will 'Boolean(\"\")' evaluate to in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    answerIndex: 1
  },
  {
    question: "Which attribute opens a hyperlink in a new browser tab or window?",
    options: ["target=\"_blank\"", "target=\"_self\"", "rel=\"noopener\"", "href=\"_new\""],
    answerIndex: 0
  },
  {
    question: "Which CSS property is used to change text to all uppercase letters?",
    options: ["text-transform: uppercase", "font-variant: small-caps", "text-decoration: uppercase", "font-style: bold"],
    answerIndex: 0
  },
  {
    question: "Which event occurs when an HTML input element loses focus?",
    options: ["focus", "change", "blur", "submit"],
    answerIndex: 2
  },
  {
    question: "Which built-in JavaScript object provides access to browser-stored key/value pairs that persist indefinitely across reloads?",
    options: ["sessionStorage", "localStorage", "cookieStorage", "indexedDB"],
    answerIndex: 1
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["4", "'22'", "NaN", "TypeError"],
    answerIndex: 1
  },
  {
    question: "Which CSS box-sizing value causes an element's specified width to include both padding and border?",
    options: ["content-box", "border-box", "padding-box", "inherit"],
    answerIndex: 1
  },
  {
    question: "Which HTML tag is used to display preformatted text preserving spaces and line breaks?",
    options: ["<code>", "<pre>", "<blockquote>", "<p>"],
    answerIndex: 1
  },
  {
    question: "Which JavaScript function halts timer execution set by setInterval()?",
    options: ["stopInterval()", "clearTimeout()", "clearInterval()", "resetInterval()"],
    answerIndex: 2
  },
  {
    question: "Which CSS property controls whether an element can be clicked or touched?",
    options: ["user-select", "pointer-events", "cursor", "touch-action"],
    answerIndex: 1
  },
  {
    question: "What will 'isNaN(\"hello\")' evaluate to in JavaScript?",
    options: ["true", "false", "null", "undefined"],
    answerIndex: 0
  },
  {
    question: "Which HTML input type provides a slider control for selecting a number within a range?",
    options: ["type=\"number\"", "type=\"slider\"", "type=\"range\"", "type=\"meter\""],
    answerIndex: 2
  },
  {
    question: "What is the default direction of flex items in a flex container?",
    options: ["column", "row", "column-reverse", "row-reverse"],
    answerIndex: 1
  },
  {
    question: "Which array method returns true if at least one element passes the provided callback test?",
    options: ["every()", "some()", "find()", "includes()"],
    answerIndex: 1
  },
  {
    question: "Which meta tag ensures that a website renders properly on mobile viewports?",
    options: [
      "<meta name=\"mobile\" content=\"true\">",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "<meta name=\"screen\" content=\"responsive\">",
      "<meta charset=\"UTF-8\">"
    ],
    answerIndex: 1
  },
  {
    question: "What does the CSS pseudo-class ':nth-child(even)' select?",
    options: ["Every odd sibling", "Every even sibling", "Only the second child", "The last child"],
    answerIndex: 1
  },
  {
    question: "Which keyword is used to handle asynchronous operations cleanly without chained callbacks or .then()?",
    options: ["await", "defer", "promise", "yield"],
    answerIndex: 0
  },
  {
    question: "Which HTTP request method is typically used to update an existing resource completely?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answerIndex: 2
  },
  {
    question: "What does DOM stand for in web technology?",
    options: ["Data Object Model", "Document Object Model", "Dynamic Orientation Mode", "Digital Ordinance Method"],
    answerIndex: 1
  },
  {
    question: "Which property in CSS Flexbox defines the default size of an item before remaining space is distributed?",
    options: ["flex-grow", "flex-shrink", "flex-basis", "order"],
    answerIndex: 2
  },
  {
    question: "What is the purpose of the 'event.preventDefault()' method in JavaScript?",
    options: [
      "Stops event bubbling up the DOM",
      "Prevents the default browser action for that event",
      "Removes the event listener",
      "Pauses JS execution"
    ],
    answerIndex: 1
  },
  {
    question: "Which HTML attribute specifies that an input field must be filled out before submitting a form?",
    options: ["validate", "necessary", "required", "checked"],
    answerIndex: 2
  },
  {
    question: "Which CSS property specifies how content that exceeds its container bounds is handled?",
    options: ["overflow", "clip-path", "visibility", "display"],
    answerIndex: 0
  },
  {
    question: "What is the value of '[] == ![]' in JavaScript due to type coercion?",
    options: ["true", "false", "undefined", "TypeError"],
    answerIndex: 0
  },
  {
    question: "Which JavaScript statement immediately terminates a loop execution?",
    options: ["return", "continue", "break", "exit"],
    answerIndex: 2
  },
  {
    question: "In CSS Grid, which unit represents a fraction of the available free space in the grid container?",
    options: ["%", "vw", "fr", "px"],
    answerIndex: 2
  },
  {
    question: "Which tag is used in modern HTML5 to associate captions or annotations with a <figure>?",
    options: ["<figcaption>", "<label>", "<caption>", "<summary>"],
    answerIndex: 0
  },
  {
    question: "Which method serializes a JavaScript object into a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.encode()", "JSON.format()"],
    answerIndex: 1
  },
  {
    question: "Which CSS transition property specifies how intermediate values of the animation are calculated?",
    options: ["transition-duration", "transition-property", "transition-timing-function", "transition-delay"],
    answerIndex: 2
  },
  {
    question: "What is the scope of a variable declared with 'var' inside a function?",
    options: ["Block scope", "Function scope", "Global scope always", "Lexical arrow scope"],
    answerIndex: 1
  }
];

// App State
let activeQuizData = [];
let currentIndex = 0;
let score = 0;
const MAX_LIVES = 3;
let remainingLives = MAX_LIVES;
let timer = null;
const QUESTION_TIME_LIMIT = 30; // 30 seconds per question
let timeLeft = QUESTION_TIME_LIMIT;

// DOM Elements
const quizHeader = document.getElementById("quiz-header");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const currentQSpan = document.getElementById("current-q");
const totalQSpan = document.getElementById("total-q");
const livesDisplay = document.getElementById("lives-display");
const timeLeftSpan = document.getElementById("time-left");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const performanceFeedback = document.getElementById("performance-feedback");
const restartBtn = document.getElementById("restart-btn");
const flashOverlay = document.getElementById("flash-overlay");

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// Update the heart display for lives
function updateLivesDisplay() {
  const hearts = "❤️".repeat(remainingLives) + "🖤".repeat(MAX_LIVES - remainingLives);
  livesDisplay.textContent = hearts;
}

// Start / Initialize Quiz
function initQuiz() {
  clearInterval(timer);

  // Shuffle questions randomly
  activeQuizData = shuffleArray(rawQuizData);

  currentIndex = 0;
  score = 0;
  remainingLives = MAX_LIVES;
  updateLivesDisplay();

  totalQSpan.textContent = activeQuizData.length;
  maxScoreSpan.textContent = activeQuizData.length;

  resultScreen.classList.add("hide");
  flashOverlay.classList.add("hide");
  quizHeader.classList.remove("hide");
  quizScreen.classList.remove("hide");

  loadQuestion();
}

// Render the current question
function loadQuestion() {
  clearInterval(timer);
  timeLeft = QUESTION_TIME_LIMIT;
  timeLeftSpan.textContent = timeLeft;
  startTimer();

  nextBtn.classList.add("hide");
  optionsContainer.innerHTML = "";

  const currentQuiz = activeQuizData[currentIndex];
  currentQSpan.textContent = currentIndex + 1;
  questionText.textContent = currentQuiz.question;

  currentQuiz.options.forEach((optText, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = optText;
    button.addEventListener("click", () => handleAnswer(index, button));
    optionsContainer.appendChild(button);
  });
}

// Timer management
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleIncorrectAttempt(null);
    }
  }, 1000);
}

// Handle option selection
function handleAnswer(selectedIndex, selectedBtn) {
  clearInterval(timer);
  const correctIndex = activeQuizData[currentIndex].answerIndex;
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === correctIndex) {
    selectedBtn.classList.add("correct");
    score++;
    nextBtn.classList.remove("hide");
  } else {
    selectedBtn.classList.add("incorrect");
    buttons[correctIndex].classList.add("correct");
    handleIncorrectAttempt(selectedBtn);
  }
}

// Handle losing a life & check if game is over
function handleIncorrectAttempt(selectedBtn) {
  const correctIndex = activeQuizData[currentIndex].answerIndex;
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));
  if (buttons[correctIndex]) {
    buttons[correctIndex].classList.add("correct");
  }

  remainingLives--;
  updateLivesDisplay();

  if (remainingLives <= 0) {
    // 3 mistakes made -> Trigger full game over overlay and restart
    triggerGameOver();
  } else {
    // Lives still remain -> Allow user to advance to the next question
    nextBtn.classList.remove("hide");
  }
}

// Flash failure banner and restart with reshuffled questions
function triggerGameOver() {
  flashOverlay.classList.remove("hide");

  // Reset and restart after a 2.5-second pause
  setTimeout(() => {
    flashOverlay.classList.add("hide");
    initQuiz();
  }, 2500);
}

// Progress to the next question or victory screen
function handleNextQuestion() {
  currentIndex++;
  if (currentIndex < activeQuizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Render victory screen
function showResults() {
  clearInterval(timer);
  quizHeader.classList.add("hide");
  quizScreen.classList.add("hide");
  resultScreen.classList.remove("hide");

  finalScoreSpan.textContent = score;

  const percentage = (score / activeQuizData.length) * 100;
  if (percentage === 100) {
    performanceFeedback.textContent = "Flawless run! You cleared all 50 questions with 0 mistakes.";
  } else if (remainingLives > 0) {
    performanceFeedback.textContent = `Great job! You survived all 50 questions with ${remainingLives} life/lives remaining!`;
  } else {
    performanceFeedback.textContent = "Great job finishing the run!";
  }
}

// Event Listeners
nextBtn.addEventListener("click", handleNextQuestion);
restartBtn.addEventListener("click", initQuiz);

// Initialize game on load
initQuiz();
