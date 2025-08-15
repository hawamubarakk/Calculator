let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').textContent = calculation;
}

function evaluateCalculation() {
  try {
    calculation = eval(calculation);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  } catch {
    calculation = "Error";
    displayCalculation();
  }
}

function clearCalculation() {
  calculation = '';
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function deleteLastChar() {
  calculation = calculation.slice(0, -1);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

// Mouse Click Support
document.querySelectorAll('button[data-value]').forEach(btn => {
  btn.addEventListener('click', () => {
    updateCalculation(btn.getAttribute('data-value'));
  });
});

document.getElementById('equals').addEventListener('click', evaluateCalculation);
document.getElementById('clear').addEventListener('click', clearCalculation);
document.getElementById('delete').addEventListener('click', deleteLastChar);

// Keyboard Support
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || key === ".") updateCalculation(key);
  if (["+", "-", "*", "/", "%"].includes(key)) updateCalculation(` ${key} `);
  if (key === "Enter") evaluateCalculation();
  if (key === "Backspace") deleteLastChar();
  if (key === "Escape") clearCalculation();
});