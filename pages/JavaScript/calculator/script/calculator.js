const screen = document.querySelector('.screen');
let screenBuffer = "0";
let total = 0;
let operator;


// click value
const clickButton = value => {
    if (isNaN(value)) {
        symbols(value);
    } else {
        numbers(value);
    }
    screen.innerText = screenBuffer;
};

// number value
const numbers = (number) => {
    if (screenBuffer === "0") {
        screenBuffer = number;
    } else {
        screenBuffer += number;
    }
};

// symbol value
const symbols = (symbol) => {
    switch (symbol) {
        case '∁':
            screenBuffer = "0";
            total = 0;
            break;
        case '←':
            if (screenBuffer.length === 1) {
                screenBuffer = "0"
            } else {
                screenBuffer = screenBuffer.substring(0, screenBuffer.length - 1);
            }
            break;
        case '=':
            flushOperator(parseInt(screenBuffer));
            // operator = null;
            screenBuffer = total;
            total = 0;
            break;

        case '−':
        case '+':
        case '×':
        case '÷':
            doMath(symbol);
            break;

        default:
            break;
    }

};

const doMath = s => {
    const totalBuffer = parseInt(screenBuffer);

    if (total === 0) {
        total = totalBuffer;
    } else {
        flushOperator(totalBuffer);
    }
    operator = s;
    screenBuffer = "0";
};

const flushOperator = (totalBuffer) => {
    switch (operator) {
        case '−':
            total -= totalBuffer;
            break;
        case '+':
            total += totalBuffer;
            break;
        case '×':
            total *= totalBuffer;
            break;
        case '÷':
            total /= totalBuffer;
            break;

        default:
            break;
    }
}

// click Event
function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            clickButton(e.target.innerText);
        }
    });
} init();