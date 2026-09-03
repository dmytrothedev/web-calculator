let num1 = "";
let num2 = "";
let operator;

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    switch (operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
};

const keys = document.querySelectorAll(".keyboard button");

keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        const text = e.target.innerText;
        const screen = document.querySelector(".screen");

        if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes(text)) {
            if(operator){
                num2 += text;
                screen.textContent = num2;
            } else{
                num1 += text;
                screen.textContent = num1;
            }
        } else if (num1 && ["+", "-", "*", "/"].includes(text)) {
            operator = text;
            screen.textContent = operator;
        } else if (num1 && num2 && operator && text === "="){
            const result = operate(operator, Number(num1), Number(num2))
            screen.textContent = result;
        }
    });
});