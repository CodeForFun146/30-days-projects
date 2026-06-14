const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const equal = document.getElementById("equal");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const clear = document.getElementById("clear");

let display = document.getElementsByClassName("result")[0];

one.addEventListener("click", () => {
    display.textContent += "1";
})
two.addEventListener("click", () => {
    display.textContent += "2";
})
three.addEventListener("click", () => {
    display.textContent += "3";
})
four.addEventListener("click", () => {
    display.textContent += "4";
})
five.addEventListener("click", () => {
    display.textContent += "5";
})
six.addEventListener("click", () => {
    display.textContent += "6";
})
seven.addEventListener("click", () => {
    display.textContent += "7";
})
eight.addEventListener("click", () => {
    display.textContent += "8";
})
nine.addEventListener("click", () => {
    display.textContent += "9";
})
zero.addEventListener("click", () => {
    display.textContent += "0";
})
add.addEventListener("click", () => {
    display.textContent += "+";
})
sub.addEventListener("click", () => {
    display.textContent += "-";
})
div.addEventListener("click", () => {
    display.textContent += "/";
})
equal.addEventListener("click", () => {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
})



clear.addEventListener("click", () => {
    display.textContent = "";
})