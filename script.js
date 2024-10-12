//output
const mainDisplay = document.querySelector('.main-display');
const primaryDisplay = document.querySelector('.primary-display');

//input
const input = document.querySelector('input');
const allKeys = document.querySelectorAll('.key');
//helper variables
let = leftHand = '';
let = opperator = '';
let = rightHand = '';
let inputValue = '';

//arithmetic opperations
const calcFunctions = {
    sum: (a, b) => {
        return a + b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
};

//query auxilary key values
allKeys.forEach(key => {
    key.addEventListener("click", (e) => {
        let opp = '';

        primaryDisplay.textContent += e.target.id;
        leftHand += e.target.id

        if (!Number(e.target.id)) {
            switch (e.target.id) {
                case '+':
                case '-':
                case '/':
                case '*':
                    break;
                case '.':
                    break;
                case 'clear':
                    break;
                case 'back':
                    break;
                case '=':
                    break;

            }
        }

    });//end eventLister
});//end forEach loop

//calculate based on opperator selected
const operate = (leftHand, opperator, rightHand) => {
    if (opperator === '+') {
        return calcFunctions.sum(leftHand, rightHand);
    }
    if (opperator === '-') {
        return calcFunctions.subtract(leftHand, rightHand);
    }
    if (opperator === '*') {
        return calcFunctions.multiply(leftHand, rightHand);
    }
    if (opperator === '/') {
        return calcFunctions.divide(leftHand, rightHand);
    }
};