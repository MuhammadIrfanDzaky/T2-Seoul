// ─── QUIZ QUESTIONS ───────────────────────────────────────────────────────────
const allQuestions = [
  { q: "What does HTML stand for?", options: ["HyperText Markup Language","High-Level Text Machine Language","HyperTransfer Markup Link","Home Tool Markup Language"], correct: "HyperText Markup Language" },
  { q: "Which CSS property changes the text color?", options: ["color","text-color","font-color","foreground"], correct: "color" },
  { q: "What is the output of: typeof null", options: ['"object"','"null"','"undefined"','"boolean"'], correct: '"object"' },
  { q: "Which method removes the LAST element from an array?", options: ["pop()","push()","shift()","splice()"], correct: "pop()" },
  { q: "What HTTP status code means 'Not Found'?", options: ["404","200","500","301"], correct: "404" },
  { q: "Which keyword declares a block-scoped variable in modern JavaScript?", options: ["let","var","define","declare"], correct: "let" },
  { q: "What does DOM stand for?", options: ["Document Object Model","Data Object Management","Document Oriented Module","Dynamic Object Model"], correct: "Document Object Model" },
  { q: "In Git, which command stages ALL changes in the current directory?", options: ["git add .","git commit .","git push all","git stage all"], correct: "git add ." },
  { q: "Which CSS property enables a flex layout?", options: ["display: flex","display: inline","float: left","position: absolute"], correct: "display: flex" },
  { q: "What does JSON stand for?", options: ["JavaScript Object Notation","JavaScript Online Network","Java Syntax Object Name","Just a Simple Object Notation"], correct: "JavaScript Object Notation" },
  { q: "Which HTML tag creates a hyperlink?", options: ["<a>","<link>","<href>","<url>"], correct: "<a>" },
  { q: "What does async/await do in JavaScript?", options: ["Handles asynchronous code more readably","Makes code run faster","Creates a new thread","Prevents all errors"], correct: "Handles asynchronous code more readably" },
  { q: "Which array method returns a NEW array without mutating the original?", options: ["map()","forEach()","push()","pop()"], correct: "map()" },
  { q: "What is the correct single-line comment syntax in JavaScript?", options: ["// comment","# comment","<!-- comment -->","** comment"], correct: "// comment" },
  { q: "What is the purpose of the fetch() API?", options: ["To make HTTP requests","To get HTML elements","To read files from disk","To update CSS styles"], correct: "To make HTTP requests" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

// ─── STATE ────────────────────────────────────────────────────────────────────
let quizQuestions = [], quizIndex = 0, quizScore = 0, quizTimer, timerVal = 30;

// ─── QUIZ FUNCTIONS ───────────────────────────────────────────────────────────
function showState(id) {
  ['quizStart','quizQuestion','quizResult'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

function startQuiz() {
  quizQuestions = shuffle(allQuestions).slice(0, 10).map(q => ({
    ...q, options: shuffle(q.options)
  }));
  quizIndex = 0; quizScore = 0;
  showState('quizQuestion');
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[quizIndex];
  const lang = i18n[currentLang];
  document.getElementById('quizProgressTxt').textContent = `${quizIndex + 1} / 10`;
  document.getElementById('quizProgressFill').style.width = `${(quizIndex / 10) * 100}%`;
  document.getElementById('quizQuestionTxt').textContent = q.q;
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('quizNextBtn').classList.add('hidden');

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-opt" data-opt="${escHtml(opt)}" onclick="selectAnswer(this)">
      <span class="opt-letter">${['A','B','C','D'][i]}</span>
      <span>${escHtml(opt)}</span>
    </button>`).join('');

  startTimer();
}

function selectAnswer(btn) {
  clearInterval(quizTimer);
  const chosen = btn.dataset.opt;
  const q = quizQuestions[quizIndex];
  const correct = q.correct;
  const isCorrect = chosen === correct;
  if (isCorrect) quizScore++;

  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    const text = b.querySelector('span:last-child').textContent;
    if (text === correct) b.classList.add('opt-correct');
    else if (b === btn && !isCorrect) b.classList.add('opt-wrong');
  });

  const fb = document.getElementById('quizFeedback');
  const lang = i18n[currentLang];
  fb.classList.remove('hidden');
  document.getElementById('feedbackIcon').textContent = isCorrect ? '✓' : '✗';
  document.getElementById('feedbackMsg').textContent = isCorrect ? lang['game.correct'] : lang['game.wrong'];
  fb.className = `quiz-feedback ${isCorrect ? 'fb-correct' : 'fb-wrong'}`;

  document.getElementById('quizNextBtn').classList.remove('hidden');
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= 10) { showResult(); return; }
  renderQuestion();
}

function showResult() {
  clearInterval(quizTimer);
  showState('quizResult');
  const lang = i18n[currentLang];
  document.getElementById('resultScore').textContent = quizScore;
  const pct = (quizScore / 10) * 100;
  setTimeout(() => {
    document.getElementById('resultArc').style.strokeDashoffset = 100 - pct;
    document.getElementById('resultArc').style.transition = 'stroke-dashoffset 1s ease';
  }, 100);
  let msg = quizScore >= 8 ? lang['game.finish.great']
          : quizScore >= 5 ? lang['game.finish.good']
          : lang['game.finish.ok'];
  document.getElementById('resultMsg').textContent = msg;
  const arc = document.getElementById('resultArc');
  arc.style.stroke = quizScore >= 8 ? '#22c55e' : quizScore >= 5 ? '#0ea5e9' : '#f59e0b';
}

function startTimer() {
  timerVal = 30;
  document.getElementById('timerNum').textContent = timerVal;
  document.getElementById('timerArc').style.strokeDashoffset = 0;
  clearInterval(quizTimer);
  quizTimer = setInterval(() => {
    timerVal--;
    document.getElementById('timerNum').textContent = timerVal;
    const offset = ((30 - timerVal) / 30) * 100;
    document.getElementById('timerArc').style.strokeDashoffset = offset;
    document.getElementById('timerArc').style.stroke = timerVal <= 10 ? '#f59e0b' : 'var(--accent)';
    if (timerVal <= 0) {
      clearInterval(quizTimer);
      document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
      document.querySelectorAll('.quiz-opt').forEach(b => {
        if (b.querySelector('span:last-child').textContent === quizQuestions[quizIndex].correct)
          b.classList.add('opt-correct');
      });
      const fb = document.getElementById('quizFeedback');
      fb.classList.remove('hidden');
      document.getElementById('feedbackIcon').textContent = '⏰';
      document.getElementById('feedbackMsg').textContent = "Time's up!";
      fb.className = 'quiz-feedback fb-wrong';
      document.getElementById('quizNextBtn').classList.remove('hidden');
    }
  }, 1000);
}
