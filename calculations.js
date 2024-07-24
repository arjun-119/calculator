function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let operator,
  flag = 0;

function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);

  if (operator === "-") return subtract(num1, num2);

  if (operator === "*") return multiply(num1, num2);

  if (operator === "/") return divide(num1, num2);
}

const displaydiv = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let num1 = (num2 = "");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "AC") displaydiv.textContent = 0;

    if (
      btn.value === "+" ||
      btn.value === "-" ||
      btn.value === "*" ||
      btn.value === "/"
    ) {
      flag = 1;
      displaydiv.textContent = "";
      operator = btn.value;
    }
    if (btn.value === "=") operate(operator, +num1, +num2);
    else {
      if (flag === 0) num1.concat(btn.value);

      if (flag === 1) num2.concat(btn.value);
    }
  });
});
