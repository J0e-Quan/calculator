//LIST OF ALL FUNCTIONS
function add(num1, num2) {
    return (num1 + num2);
};

function subtract(num1, num2) {
    return (num1 - num2);
};

function multiply(num1, num2) {
    return (num1 * num2);
};

function divide(num1, num2) {
    return (num1 / num2);
};

function operate(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "×":
            result = multiply(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);
            break;
    }
    return result
}

function updateDisplay(num) {
    display.textContent = num
}







let num1 = ""
let num2 = ""
let number1 = ""
let number2 = ""
let operator = ""
let display = document.querySelector('.result')

//Button imput handler
let btns = document.querySelector(".buttons")
btns.addEventListener('click', (event) => {
    let targetBtn = event.target
    if (targetBtn.classList.contains("number") || targetBtn.classList.contains("decimal")) {
        if (number1 === "") {
            num1 = num1 + targetBtn.textContent
            updateDisplay(num1)
            console.log("Num1: "+num1)
        } else if (number1 !== "") {
            num2 = num2 + targetBtn.textContent
            updateDisplay(num2)
            console.log("Num2: "+num2)
        }
    } else if (targetBtn.classList.contains("operator")) {
        operator = targetBtn.textContent;
        number1 = Number(num1);
        num1 = "";
    } else if (targetBtn.classList.contains("equals")) {
        number2 = Number(num2);
        num2 = "";
        let result = operate(number1, operator, number2);
        operator = "";
        number2 = "";
        number1 = result
        num1 = result
        updateDisplay(number1);
    } else if (targetBtn.classList.contains("clear")) {
        num1 = ""
        num2 = ""
        operator = ""
        number1 = ""
        number2 = ""
        updateDisplay(0)
    }
})