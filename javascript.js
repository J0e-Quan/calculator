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
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "×":
            answer = multiply(num1, num2);
            break;
        case "÷":
            answer = divide(num1, num2);
            break;
    }
    return answer
}

function updateDisplay(imput) {
    display.textContent = imput
}

function backspace() {
    if (operator === "") {
            result = ""
            num1 = num1.slice(0, -1)
            updateDisplay(num1)
            number1 = Number(num1);
        } else if (operator !== "") {
            result = ""
            num2 = num2.slice(0, -1)
            updateDisplay(num2)
            number2 = Number(num2);            
        }
}

function clear() {
    num1 = ""
    num2 = ""
    operator = ""
    number1 = ""
    number2 = ""
    result = ""
    updateDisplay(0)
}

function equals(imputNum1, imputOperator, imputNum2) {
    if (num2 !== "") {
        num1 = ""
        num2 = ""
        result = operate(imputNum1, imputOperator, imputNum2);
        result = Number(result.toFixed(4))
        operator = "";
        number2 = "";
        number1 = "";
        updateDisplay(result);
    }
}

function getOperator(imputOperator) {
        if (result === "") {
            operator = imputOperator;
        } else {
            number1 = result
            operator = imputOperator;
        }
}

function getNumber(imputNum) {
    if (operator === "" && num1.length < 12) {
        result = ""
        num1 = num1 + imputNum
        updateDisplay(num1)
        number1 = Number(num1);
        } else if (operator !== "" && num2.length < 12) {
        result = ""
        num2 = num2 + imputNum
        updateDisplay(num2)
        number2 = Number(num2)
        }
}







let num1 = ""
let num2 = ""
let number1 = ""
let number2 = ""
let operator = ""
let result = ""
let display = document.querySelector('.result')

//Button imput handler
let btns = document.querySelector(".buttons")
btns.addEventListener('click', (event) => {
    let targetBtn = event.target
    targetBtn.blur()
    if ((targetBtn.classList.contains("number") || targetBtn.classList.contains("decimal"))) {
        getNumber(targetBtn.textContent)
    } else if (targetBtn.classList.contains("operator")) {
        getOperator(targetBtn.textContent)
    } else if (targetBtn.classList.contains("equals") && num2 !== "") {
        equals(number1, operator, number2)
    } else if (targetBtn.classList.contains("clear")) {
        clear()
    } else if (targetBtn.classList.contains("delete")) {
        backspace()
    }
})

//Keyboard key handler
window.addEventListener('keydown', (event) => {
    let targetKey = event.key
    event.preventDefault()
    if ((targetKey >= 0 && targetKey <=9) || targetKey === ".") {
       getNumber(targetKey)
    } else if (targetKey === "+" || targetKey === "-" || targetKey === "*" || targetKey === "/") {
        let imputOperator;
        switch(targetKey) {
            case "+":
                imputOperator = "+"
                break;
            case "-":
                imputOperator = "-"
                break;
            case "*":               //For multiply, keyboard symbol is different from symbol used for operator!
                imputOperator = "×"
                break;
            case "/":               //For divide, keyboard symbol is different from symbol used for operator!
                imputOperator = "÷"
                break;
        }
        getOperator(imputOperator)
    } else if (targetKey === "=" || targetKey === "Enter") {
        equals(number1, operator, number2)
    } else if (targetKey === "Escape") {
        clear()
    } else if (targetKey === "Backspace"|| targetKey === "Delete") {
        backspace()
    }
})