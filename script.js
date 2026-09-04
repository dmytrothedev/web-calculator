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

const screen = document.querySelector(".screen");
const keys = document.querySelectorAll(".keyboard button");

function handleInput(text){
    function clear(){
        num1 = "";
        num2= "";
        operator = null;
        screen.textContent = null;
    };
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(text)) {
        if(operator){
            num2 += text;
            screen.textContent = num2;
        } else{
            num1 += text;
            screen.textContent = num1;
        }
    } else if (num1 !== "" && ["+", "-", "*", "/"].includes(text)) {
        if (num1 !== "" && num2 && operator){
            let result = operate(operator, Number(num1), Number(num2))
            result = Math.round(result * 100) / 100;                
            if(result === Infinity || result === -Infinity || Number.isNaN(result)){
                screen.textContent = "not today"
            }else {
                screen.textContent = result;
            }
            num1 = result;
            num2= "";
            operator = text;
        }else {
            operator = text;
            screen.textContent = operator;
        };
    } else if (num1 !== "" && num2 && operator && text === "="){
        let result = (operate(operator, Number(num1), Number(num2)))
        result = Math.round(result * 100) / 100;
        if(result === Infinity || result === -Infinity || Number.isNaN(result)){
            screen.textContent = "not today"
        }else {
            screen.textContent = result;
        }
        num1 = "";
        num2= "";
        operator = null;
    } else if(text === "CE"){
        clear();
    } else if (text === ".") {

        if (operator) {

            if (!num2.includes(".")) {
            num2 += ".";
            screen.textContent = num2;
            }

        } else {

            if (!num1.includes(".")) {
                num1 += ".";
                screen.textContent = num1;
            }

        }
    }else if (text === "DEL"){
        if (operator){
            let arr = Array.from(num2);
            arr.splice(-1);
            screen.textContent = arr.join('');
            num2 = screen.textContent;
        } else if (!operator){
            let arr = Array.from(num1);
            arr.splice(-1);
            screen.textContent = arr.join('');
            num1 = screen.textContent;
        }
    }
}

//forEach because method querySelectorAll returns not an array, but a NodeList. To iterate thruogh items use forEach
keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        handleInput(e.target.innerText);
    });
});

document.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Enter") {
        key = "=";
    } else if (key === "Backspace") {
        key = "DEL";
    } else if (key === "Escape") {
        key = "CE";
    }
    handleInput(key);
});