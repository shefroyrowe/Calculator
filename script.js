//output
const primaryDisplay = document.querySelector('.primary-display');
const secondaryDisplay = document.querySelector('.primary-display');
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

let inputValue = '';
allKeys.forEach((key) => {
    addEventListener("click", (e) =>{
        if (e.target.value === '=') {
            inputValue = input.value;
        }
        console.log(inputValue);
        input.value = '';
    });
   
});


const regex = /^(0|[1-9]\d*)$/g;

let = leftHand = '';
let = opperator = '';
let = rightHand = '';

let validInput = regex.test(input.value);

//perform calculations and append to display
const operate = (leftHand, opperator, rightHand) => {

}



