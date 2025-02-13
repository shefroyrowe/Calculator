//input
const allKeys = document.querySelectorAll('.key');
//output
const mainDisplay = document.querySelector('.main-display');
const primaryDisplay = document.querySelector('.primary-display');

//helper variables
let leftHand = '';
let operator = ''; 
let rightHand = '';
let calculated = false; //track if calculation has been performed

//arithmetic opperations object
const calcFunctions = {
    sum: (a, b) => a + b,
    multiply: (a, b) => a * b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
};

//access arithmetic opperations object 
//calculate based on operator selected
const operate = (leftHand, operator, rightHand) => {
    const numLeft = Number(leftHand);
    const numRight = Number(rightHand);
    let result = 0;

    switch (operator) {
        case '+':
            result = calcFunctions.sum(numLeft, numRight);
            break;
        case '-':
            result = calcFunctions.subtract(numLeft, numRight);
            break;
        case '*':
            result = calcFunctions.multiply(numLeft, numRight);
            break;
        case '/':
            result = calcFunctions.divide(numLeft, numRight);
            break;
        default:
            return NaN; // Handle invalid operators
    }

    return result;
};

//query and evaluate key values
allKeys.forEach(key => {
    key.addEventListener("click", (e) => {
        handleInput(e.target.id);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (/[0-9+\-*/.=]/.test(key) || key === "Backspace" || key === "Enter") {
        e.preventDefault(); // Prevent default behavior for some keys
        handleInput(key);
    }
});


function handleInput(key) {
    switch (key) {
        case '1': case '2': case '3': case '4': case '5':
        case '6': case '7': case '8': case '9': case '0':
            if (calculated) {
                clearDisplay();
                calculated = false;
            }

            if (!operator) {
                leftHand += key;
            } else {
                rightHand += key;
            }
            break;

        case '+': case '-': case '/': case '*':
            if (leftHand && !operator) {
                operator = key;
                calculated = false;
            } else if (leftHand && operator && rightHand) {
                // Perform chained operations
                const result = operate(leftHand, operator, rightHand);
                leftHand = String(result);
                operator = key;
                rightHand = '';
                calculated = false;
                mainDisplay.textContent = ''; // Clear main display for chained operationss
            }
            break;

        case '.':
            if (!operator && !leftHand.includes('.')) {
                leftHand += key;
            } else if (operator && !rightHand.includes('.')) {
                rightHand += key;
            }
            break;

        case 'clear':
        case "Escape": //Keyboard clear
            clearDisplay();
            break;

        case 'back':
        case "Backspace":
            if (rightHand) {
                rightHand = rightHand.slice(0, -1);
            } else if (operator) {
                operator = '';
            } else {
                leftHand = leftHand.slice(0, -1);
            }
            break;

        case '=':
        case "Enter":
            if (leftHand && operator && rightHand) {
                const result = operate(leftHand, operator, rightHand);
                if (!isNaN(result)) {
                    mainDisplay.textContent = Number(result).toFixed(2);
                    leftHand = String(result);
                    operator = '';
                    rightHand = '';
                    calculated = true;
                } else {
                    mainDisplay.textContent = "Error"; 
                }
            }
            break;
    }
    updateDisplay();
}

function updateDisplay() {
    primaryDisplay.textContent = `${leftHand} ${operator} ${rightHand}`;
}

function clearDisplay() {
    primaryDisplay.textContent = '';
    mainDisplay.textContent = '';
    leftHand = '';
    operator = '';
    rightHand = '';
    calculated = false;
}