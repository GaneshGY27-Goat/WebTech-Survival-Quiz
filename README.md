# ⚡ WebTech Survival Quiz

An interactive, sudden-death web technology quiz game built with vanilla HTML, CSS, and JavaScript. Test your knowledge across HTML5, modern CSS layouts (Flexbox & Grid), and core JavaScript fundamentals under strict time pressure with a 3-lives survival mechanic.

---

## 🎮 Key Features

- **50 Core Questions:** Comprehensive questions covering HTML semantics, CSS Box Model/Flexbox/Grid, and JavaScript DOM & ES6+ logic.
- **3-Lives Mechanic:** Players start with 3 lives (`❤️❤️❤️`). An incorrect answer or timeout deducts one life.
- **Sudden-Death Reset:** Losing all 3 lives triggers a game-over screen and restarts the challenge from Question 1.
- **Fisher-Yates Shuffle:** Questions are randomly reshuffled on every playthrough and reset so no two attempts are identical.
- **30-Second Countdown Timer:** Built using native `setInterval()` with automatic timeout handling.
- **Dynamic DOM Rendering:** Pure vanilla JavaScript state management and conditional element generation without external dependencies.
- **Responsive UI:** Clean, modern dark-themed interface built with Flexbox.

---

## 🛠️ Built With

- **HTML5:** Semantic document structuring.
- **CSS3:** Custom properties, Flexbox layout, keyframe animations, and dark UI.
- **JavaScript (ES6+):** Array algorithms, DOM manipulation, interval timers, and state control.

---

## 📂 Project Structure

\`\`\`plaintext
├── index.html        # Main markup and UI containers
├── style.css         # Styling, themes, and keyframe animations
├── script.js         # Game state, question array, timer, and shuffle logic
└── README.md         # Project documentation
\`\`\`

---

## 🚀 Getting Started

No dependencies, build tools, or server setup required.

### Prerequisites

A modern web browser (Chrome, Firefox, Safari, or Edge).

### Installation & Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/webtech-survival-quiz.git
   \`\`\`

2. Navigate into the project folder:
   \`\`\`bash
   cd webtech-survival-quiz
   \`\`\`

3. Open `index.html` in your browser:
   - Double-click `index.html`, or
   - Use VS Code Live Server extension.

---

## 🕹️ Game Rules

1. You have **30 seconds** per question.
2. Select the correct answer from the 4 options.
3. If you run out of time or pick the wrong choice:
   - You lose **1 life**.
   - If all **3 lives** are depleted, the game ends, the question pool reshuffles, and you return to question 1.
4. Survive and answer all 50 questions to claim victory!

---

## 👤 Author

- **Ganesh Yerawar**
- GitHub: [@your-username](https://github.com/your-username)
