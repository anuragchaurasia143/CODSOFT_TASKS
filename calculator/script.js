/**
 * SMART CALCULATOR ENGINE
 * Built with vanilla JavaScript (ES6+)
 * Event listeners, if-else logic, operators, loops, and history logging
 * Author: Anurag Chaurasia | CodSoft Task 3
 */

// --- Calculator State Object ---
const calculatorState = {
  currentOperand: '0',
  previousOperand: '',
  operation: null,
  isCalculated: false,
  history: []
};

// --- DOM Element References ---
const displayElement = document.getElementById('calc-display');
const expressionElement = document.getElementById('calc-expression');
const keypadElement = document.getElementById('calc-keypad');
const historyListElement = document.getElementById('history-list');
const historyEmptyElement = document.getElementById('history-empty');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const historyToggleBtn = document.getElementById('history-toggle-btn');
const sidePanelElement = document.getElementById('calc-side-panel');

// --- Helper: Format Number for Display ---
function formatDisplayNumber(numStr) {
  if (numStr === '' || numStr === 'Error' || numStr === 'Cannot divide by 0') {
    return numStr;
  }
  
  const stringNumber = numStr.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];
  
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = stringNumber.startsWith('-') ? '-' : '';
  } else {
    integerDisplay = integerDigits.toLocaleString('en-US', {
      maximumFractionDigits: 0
    });
  }

  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

// --- Helper: Clean Floating Point Math ---
function computeMath(firstVal, secondVal, operator) {
  const a = parseFloat(firstVal);
  const b = parseFloat(secondVal);

  if (isNaN(a) || isNaN(b)) return '';

  let result = 0;

  if (operator === 'add' || operator === '+') {
    result = a + b;
  } else if (operator === 'subtract' || operator === '-') {
    result = a - b;
  } else if (operator === 'multiply' || operator === '*' || operator === '×') {
    result = a * b;
  } else if (operator === 'divide' || operator === '/' || operator === '÷') {
    if (b === 0) {
      return 'Cannot divide by 0';
    }
    result = a / b;
  } else {
    return b;
  }

  // Round floating point precision issues (e.g. 0.1 + 0.2 = 0.3)
  const precisionResult = parseFloat(result.toPrecision(12));
  return precisionResult.toString();
}

// --- Operator Symbol Mapper ---
function getOperatorSymbol(op) {
  if (op === 'add' || op === '+') return '+';
  if (op === 'subtract' || op === '-') return '−';
  if (op === 'multiply' || op === '*' || op === '×') return '×';
  if (op === 'divide' || op === '/' || op === '÷') return '÷';
  return '';
}

// --- Core Display Update ---
function updateDisplay() {
  displayElement.textContent = formatDisplayNumber(calculatorState.currentOperand);

  if (calculatorState.operation != null && calculatorState.previousOperand !== '') {
    const symbol = getOperatorSymbol(calculatorState.operation);
    expressionElement.textContent = `${formatDisplayNumber(calculatorState.previousOperand)} ${symbol}`;
  } else {
    expressionElement.textContent = '';
  }

  // Update active operator visual highlight
  const allOpButtons = document.querySelectorAll('.btn-operator');
  for (let i = 0; i < allOpButtons.length; i++) {
    const btn = allOpButtons[i];
    if (calculatorState.operation && btn.dataset.action === calculatorState.operation && calculatorState.currentOperand === '') {
      btn.classList.add('active-operator');
    } else {
      btn.classList.remove('active-operator');
    }
  }
}

// --- Input Handling Functions ---

// 1. Append Digit
function appendNumber(number) {
  if (calculatorState.currentOperand === 'Cannot divide by 0') {
    calculatorState.currentOperand = '';
  }

  // If a calculation just finished, start fresh
  if (calculatorState.isCalculated) {
    calculatorState.currentOperand = '';
    calculatorState.isCalculated = false;
  }

  // Prevent multiple leading zeroes
  if (number === '0' && calculatorState.currentOperand === '0') {
    return;
  }

  if (calculatorState.currentOperand === '0' && number !== '.') {
    calculatorState.currentOperand = number.toString();
  } else {
    calculatorState.currentOperand = calculatorState.currentOperand.toString() + number.toString();
  }

  updateDisplay();
}

// 2. Append Decimal Point
function appendDecimal() {
  if (calculatorState.isCalculated) {
    calculatorState.currentOperand = '0';
    calculatorState.isCalculated = false;
  }

  if (calculatorState.currentOperand === '' || calculatorState.currentOperand === 'Cannot divide by 0') {
    calculatorState.currentOperand = '0';
  }

  // Prevent multiple decimals in the same number
  if (!calculatorState.currentOperand.includes('.')) {
    calculatorState.currentOperand += '.';
  }

  updateDisplay();
}

// 3. Choose Arithmetic Operation
function chooseOperation(operation) {
  if (calculatorState.currentOperand === 'Cannot divide by 0') {
    allClear();
    return;
  }

  if (calculatorState.currentOperand === '' && calculatorState.previousOperand !== '') {
    // If user clicks a different operator consecutively, just update the operator
    calculatorState.operation = operation;
    updateDisplay();
    return;
  }

  if (calculatorState.previousOperand !== '') {
    executeCalculation();
  }

  calculatorState.operation = operation;
  calculatorState.previousOperand = calculatorState.currentOperand;
  calculatorState.currentOperand = '';
  calculatorState.isCalculated = false;
  updateDisplay();
}

// 4. Calculate Final Result
function executeCalculation() {
  if (calculatorState.operation == null || calculatorState.previousOperand === '') {
    return;
  }

  let secondOperand = calculatorState.currentOperand;
  if (secondOperand === '') {
    secondOperand = calculatorState.previousOperand;
  }

  const prev = calculatorState.previousOperand;
  const current = secondOperand;
  const opSymbol = getOperatorSymbol(calculatorState.operation);
  
  const computation = computeMath(prev, current, calculatorState.operation);

  if (computation === 'Cannot divide by 0') {
    calculatorState.currentOperand = computation;
    calculatorState.previousOperand = '';
    calculatorState.operation = null;
    calculatorState.isCalculated = true;
    updateDisplay();
    return;
  }

  // Add entry to calculation history list
  addHistoryEntry(`${formatDisplayNumber(prev)} ${opSymbol} ${formatDisplayNumber(current)}`, computation);

  calculatorState.currentOperand = computation;
  calculatorState.previousOperand = '';
  calculatorState.operation = null;
  calculatorState.isCalculated = true;

  updateDisplay();
}

// 5. Negate Current Number (+/-)
function negateNumber() {
  if (calculatorState.currentOperand === '' || calculatorState.currentOperand === '0' || calculatorState.currentOperand === 'Cannot divide by 0') {
    return;
  }

  if (calculatorState.currentOperand.startsWith('-')) {
    calculatorState.currentOperand = calculatorState.currentOperand.slice(1);
  } else {
    calculatorState.currentOperand = '-' + calculatorState.currentOperand;
  }

  updateDisplay();
}

// 6. Delete Last Character (Backspace)
function backspace() {
  if (calculatorState.isCalculated || calculatorState.currentOperand === 'Cannot divide by 0') {
    allClear();
    return;
  }

  if (calculatorState.currentOperand.length > 0) {
    calculatorState.currentOperand = calculatorState.currentOperand.slice(0, -1);
    if (calculatorState.currentOperand === '' || calculatorState.currentOperand === '-') {
      calculatorState.currentOperand = '0';
    }
  } else {
    calculatorState.currentOperand = '0';
  }

  updateDisplay();
}

// 7. Clear Entry (CE)
function clearEntry() {
  calculatorState.currentOperand = '0';
  updateDisplay();
}

// 8. All Clear (AC)
function allClear() {
  calculatorState.currentOperand = '0';
  calculatorState.previousOperand = '';
  calculatorState.operation = null;
  calculatorState.isCalculated = false;
  updateDisplay();
}

// --- History Management ---
function addHistoryEntry(expressionStr, resultStr) {
  calculatorState.history.unshift({
    expression: expressionStr,
    result: resultStr
  });

  renderHistory();
}

function renderHistory() {
  if (calculatorState.history.length === 0) {
    historyEmptyElement.style.display = 'flex';
    historyListElement.innerHTML = '';
    historyListElement.appendChild(historyEmptyElement);
    return;
  }

  historyEmptyElement.style.display = 'none';
  historyListElement.innerHTML = '';

  // Use loop to render history records
  for (let i = 0; i < calculatorState.history.length; i++) {
    const item = calculatorState.history[i];
    const itemEl = document.createElement('div');
    itemEl.className = 'history-item';
    itemEl.setAttribute('role', 'button');
    itemEl.setAttribute('tabindex', '0');
    itemEl.title = 'Click to load result onto screen';

    itemEl.innerHTML = `
      <div class="history-item-exp">${item.expression} =</div>
      <div class="history-item-res">${formatDisplayNumber(item.result)}</div>
    `;

    // Click to load history value back onto calculator
    itemEl.addEventListener('click', () => {
      calculatorState.currentOperand = item.result.toString();
      calculatorState.isCalculated = true;
      updateDisplay();
    });

    historyListElement.appendChild(itemEl);
  }
}

function clearHistory() {
  calculatorState.history = [];
  renderHistory();
}

// --- Keypad Button Click Event Listeners ---
keypadElement.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const number = button.dataset.number;
  const action = button.dataset.action;

  if (number !== undefined) {
    appendNumber(number);
  } else if (action === 'decimal') {
    appendDecimal();
  } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    chooseOperation(action);
  } else if (action === 'calculate') {
    executeCalculation();
  } else if (action === 'all-clear') {
    allClear();
  } else if (action === 'clear-entry') {
    clearEntry();
  } else if (action === 'backspace') {
    backspace();
  } else if (action === 'negate') {
    negateNumber();
  }
});

// --- Physical Keyboard Event Listeners ---
window.addEventListener('keydown', (event) => {
  const key = event.key;

  // Numbers 0-9
  if (key >= '0' && key <= '9') {
    appendNumber(key);
  } else if (key === '.') {
    appendDecimal();
  } else if (key === '+') {
    chooseOperation('add');
  } else if (key === '-') {
    chooseOperation('subtract');
  } else if (key === '*') {
    chooseOperation('multiply');
  } else if (key === '/') {
    event.preventDefault(); // Prevent quick search in Firefox
    chooseOperation('divide');
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    executeCalculation();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    allClear();
  } else if (key === 'Delete') {
    clearEntry();
  }
});

// --- Side Panel / History Event Listeners ---
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', clearHistory);
}

if (historyToggleBtn && sidePanelElement) {
  historyToggleBtn.addEventListener('click', () => {
    sidePanelElement.classList.toggle('open-mobile');
  });
}

// --- Initial Render ---
updateDisplay();
renderHistory();
