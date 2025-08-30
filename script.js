let a = 0;
let b = 0;
//let operate = "";
const container = document.querySelector(".container");

function add (a, b){
    console.log (a + b);
    return (a + b);
};

function subtract (a, b){
    console.log (a - b);
    return (a - b);
};

function multiply (a, b){
    console.log (a * b);
    return (a * b);
};

function divide (a, b){
    console.log (a / b);
    return (a / b);
};

function operate (){

};

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "display";
container.appendChild(display);

// Button layout (4x4 for example)
const buttonValues = [
  ["7", "8", "9", "x"],
  ["4", "5", "6", "/"],
  ["1", "2", "3", "+"],
  ["0", ".", "=", "-"]
];

buttonValues.forEach(rowValues => {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  rowValues.forEach(val => {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = val;   // assign the value here
    row.appendChild(button);
  });
});