//output
const displayResults = document.querySelector('.display');
//input
const input = document.querySelector('input');
const allKeys = document.querySelectorAll('.key');

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

//helper variables
let = leftHand = '';
let = opperator = '';
let = rightHand = '';
let inputValue = '';

//validate and capture input
input.addEventListener("input", () => {
    if (Number(input.value) || 
    input.value.includes('+') ||
    input.value.includes('-') ||
    input.value.includes('/') ||
    input.value.includes('*')) {

        inputValue = input.value ;

    } else {

        input.value = inputValue;

    }
    console.log(inputValue);
});

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

//query button values
allKeys.forEach(key => {
    key.addEventListener("click", (e) => {

        if (Number(e.target.id)) {
            input.value += e.target.id;
            inputValue += e.target.id;

            switch (e.target.id) {
                case '+':
                case '-':
                case '*':
                case '/':
                    opperator = e.target.id;

                    if (!leftHand) {

                        leftHand = inputValue;
                        inputValue += opperator;

                    }
                    if (inputValue.includes(opperator)) {

                        rightHand = inputValue

                    } else {

                        input.value = inputValue;

                    }
                    break;
                case '.':
                    if (!inputValue.includes('.')) {
                        inputValue += '.';
                    }
                case '=':
                case 'clear':
            }
        }
        console.log(inputValue);
    });//end eventLister
});//end forEach loop


