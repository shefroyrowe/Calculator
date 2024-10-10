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
        input.value === '+' ||
        Number(input.value) ||
        input.value === '-' ||
        Number(input.value) ||
        input.value === '*' ||
        Number(input.value) ||
        input.value === '/' ||
        Number(input.value) ||
        input.value === '.') {

        inputValue = input.value;

    } else {

        input.value = '';

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



