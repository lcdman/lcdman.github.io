let screen = document.getElementById('screen');

function appendNumber(num) {
  if (screen.textContent === '0') {
    screen.textContent = num;
  } else {
    screen.textContent += num;
  }
}

function appendOperator(op) {
  const lastChar = screen.textContent.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    screen.textContent = screen.textContent.slice(0, -1) + op;
  } else {
    screen.textContent += op;
  }
}

function clearScreen() {
  screen.textContent = '0';
}

function backspace() {
  if (screen.textContent.length <= 1) {
    screen.textContent = '0';
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
  }
}

function calculate() {
  try {
    const result = eval(screen.textContent);
    screen.textContent = result;
  } catch {
    screen.textContent = '錯誤';
  }
}
