//output
const mainDisplay = document.querySelector('.main-display');
const primaryDisplay = document.querySelector('.primary-display');

//input
const input = document.querySelector('input');
const allKeys = document.querySelectorAll('.key');
//helper variables
let leftHand = '';
let opperator = '';
let rightHand = '';

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


        switch (e.target.id) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if (!opperator && !rightHand) {
                    leftHand += e.target.id;
                    primaryDisplay.textContent = `${leftHand}`;

                    console.log("left hand: ", leftHand);
                    console.log("opperator: ", opperator);
                    console.log("right hand: ", rightHand);
                } else if (leftHand && opperator) {
                    rightHand += e.target.id;
                    primaryDisplay.textContent = `${leftHand} ${opperator} ${rightHand}`;

                    console.log("left hand: ", leftHand);
                    console.log("opperator: ", opperator);
                    console.log("right hand: ", rightHand);
                }
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                if (leftHand && !opperator) {
                    opperator = e.target.id;
                    primaryDisplay.textContent = `${leftHand} ${opperator} ${rightHand}`;

                    console.log("left hand: ", leftHand);
                    console.log("opperator: ", opperator);
                    console.log("right hand: ", rightHand);
                }
                
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