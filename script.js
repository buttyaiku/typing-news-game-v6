let questions = [];
let current = 0;

async function loadQuestions() {
  const res = await fetch('questions.json');
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.text;
  document.getElementById('translation').textContent = q.translation;
  document.getElementById('answerInput').value = '';
  document.getElementById('answerInput').focus();
}

document.getElementById('answerInput').addEventListener('input', (e) => {
  const input = e.target.value;
  const correct = questions[current].text;
  if (input === correct) {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      document.getElementById('result').textContent = '🎉 All done!';
      document.getElementById('question').textContent = '';
      document.getElementById('translation').textContent = '';
      document.getElementById('answerInput').style.display = 'none';
    }
  }
});

loadQuestions();
