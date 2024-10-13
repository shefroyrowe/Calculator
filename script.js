//input
const allKeys = document.querySelectorAll('.key');
//output
const mainDisplay = document.querySelector('.main-display');
const primaryDisplay = document.querySelector('.primary-display');

//helper variables
let leftHand = '';
let opperator = '';
let rightHand = '';
let limitFixed = 0;

//arithmetic opperations object
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

//access arithmetic opperations object 
//calculate based on opperator selected
const operate = (leftHand, opperator, rightHand) => {
    //store result from any 
    let result = 0;

    //addition
    if (opperator === '+') {
        result = calcFunctions.sum(leftHand, rightHand);
    }
    //subtraction
    if (opperator === '-') {
        result = calcFunctions.subtract(leftHand, rightHand);
    }
    //multiplication
    if (opperator === '*') {
        result = calcFunctions.multiply(leftHand, rightHand);
    }
    //divide
    if (opperator === '/') {
        result = calcFunctions.divide(leftHand, rightHand);
    }

    //return result of equation
    return result;
};

//query key values
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
                if (!opperator &&
                    !rightHand) {
                    leftHand += e.target.id;
                    primaryDisplay.textContent =
                        `${leftHand}`;

                } else if (leftHand &&
                    opperator) {
                    rightHand += e.target.id;
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;
                }
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                if (leftHand && !opperator) {
                    opperator = e.target.id;
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;
                }
                break;
            case '.':
                if (!opperator &&
                    !rightHand &&
                    !leftHand.includes('.')) {
                    leftHand += '.';
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;

                } else if (opperator &&
                    leftHand &&
                    !rightHand.includes('.')) {
                    rightHand += '.';
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;
                }
                break;
            case 'clear':
                primaryDisplay.textContent = '';
                mainDisplay.textContent = '';
                leftHand = '';
                opperator = '';
                rightHand = '';
                break;
            case 'back':
                if (!opperator &&
                    !rightHand) {
                    leftHand = leftHand.slice(0, -1);
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;
                } else if (opperator &&
                    !rightHand) {
                    opperator = '';
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;
                } else if (opperator &&
                    leftHand) {
                    rightHand = rightHand.slice(0, -1);
                    primaryDisplay.textContent =
                        `${leftHand} ${opperator} ${rightHand}`;
                }
                break;
            case '=':
                //limit decimal places to 0nly 2 after the dot
                limitFixed = `${operate(Number(leftHand), opperator, Number(rightHand))}`;
                if (String(limitFixed).includes('.')) {
                    mainDisplay.textContent = Number(limitFixed).toFixed(2);
                } else {
                    mainDisplay.textContent = limitFixed;
                }

                break;

        }
    });//end eventLister
});//end forEach loop

///FEATURES TO IMPLIMENT
/*
-- when result is being displayed in main display
    and an opperator ('+','-','/','*') is pressed
    result should populate the primary display along with the 
    pressed opperator.

-- add keyboard support
-- turn ui to glass
-- animated structure
*/