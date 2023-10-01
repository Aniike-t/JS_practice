let inputElement = document.getElementById("input");
let outputElement = document.getElementById("output");

function appendToInput(value) {
    inputElement.textContent += value;
}

function clearDisplay() {
    inputElement.style.fontSize = "26px";
    outputElement.style.fontSize = "26px";
    inputElement.textContent = "";
    outputElement.textContent = "";
}

function calculateResult() {
    inputElement.style.fontSize = "23px";
    outputElement.style.fontSize = "34px";
    try {
        const expression = inputElement.textContent;
        const result = eval(expression);
        outputElement.textContent = result;

        const shadow1 = document.getElementById("shadow1");
        const shadow2 = document.getElementById("shadow2");
        const display = document.getElementById("Display");
        display.style.animation = "none";
        shadow1.style.animation = "none";
        shadow2.style.animation = "none";
        void shadow1.offsetWidth; // Trigger reflow to restart the animation
        void shadow2.offsetWidth;
        void display.offsetWidth;
        display.style.animation = "moveShadow 0.2s ease-in-out";
        shadow1.style.animation = "moveShadow 0.2s ease-in-out";
        shadow2.style.animation = "moveShadow 0.2s ease-in-out";
    } catch (error) {
        outputElement.textContent = "Error";
    }
}
function backspace() {
    const currentInput = inputElement.textContent;
    inputElement.textContent = currentInput.slice(0, -1);
}