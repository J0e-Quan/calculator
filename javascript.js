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

function updateDisplay(num) {
    display.textContent = num
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
    if ((targetBtn.classList.contains("number") || targetBtn.classList.contains("decimal"))) {
        if (operator === "" && num1.length < 12) {
            result = ""
            num1 = num1 + targetBtn.textContent
            updateDisplay(num1)
            number1 = Number(num1);
        } else if (operator !== "" && num2.length < 12) {
            result = ""
            num2 = num2 + targetBtn.textContent
            updateDisplay(num2)
            number2 = Number(num2)
        }
    } else if (targetBtn.classList.contains("operator")) {
        if (result === "") {
            operator = targetBtn.textContent;
            console.log(number1)
        } else {
            number1 = result
            operator = targetBtn.textContent;
            console.log(number1)
        }
    } else if (targetBtn.classList.contains("equals") && num2 !== "") {
        num1 = ""
        num2 = ""
        result = operate(number1, operator, number2);
        result = Number(result.toFixed(4))
        operator = "";
        number2 = "";
        number1 = "";
        updateDisplay(result);
        console.log(result)
    } else if (targetBtn.classList.contains("clear")) {
        num1 = ""
        num2 = ""
        operator = ""
        number1 = ""
        number2 = ""
        result = ""
        updateDisplay(0)
    } else if (targetBtn.classList.contains("delete")) {
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
})

