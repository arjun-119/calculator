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
let result;
let operator,
  flag = 0;

function operate(operator, num1, num2) {
  if (operator === "+") result = add(num1, num2);
  else if (operator === "-") result = subtract(num1, num2);
  else if (operator === "*") result = multiply(num1, num2);
  else if (operator === "/") {
    result = divide(num1, num2);
    if (result === Infinity) result = "LOL NO";
  }
  operator = "";
}

const displaydiv = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let num1 = (num2 = "");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "AC") {
      displaydiv.textContent = "0";
      num1 = "";
      num2 = "";
      flag = 0;
      operator = "";
      return;
    } else if (
      btn.value === "+" ||
      btn.value === "-" ||
      btn.value === "*" ||
      btn.value === "/"
    ) {
      if (flag === 1) {
        operate(operator, +num1, +num2);
        operator = btn.value;
        displaydiv.textContent = result;
        num1 = String(result);
        num2 = "";
        return;
      } else {
        flag = 1;
        displaydiv.textContent = num1;
        operator = btn.value;
        return;
      }
    } else if (btn.value === "=") {
      if (num2 === "") {
        displaydiv.textContent = "0";
        num1 = "";
        flag = 0;
        operator = "";
        return;
      } else {
        operate(operator, +num1, +num2);
        if (result === "LOL NO") {
          result = "";
          num1 = "";
          num2 = "";
          flag = 0;
          operator = "";
          displaydiv.textContent = "0";
          return;
        } else {
          displaydiv.textContent = result;
          num1 = String(result);
          num2 = "";
          flag = 0;
          return;
        }
      }
    } else if (flag === 0 && result !== "LOL NO") {
      num1 = num1.concat(btn.value);
      displaydiv.textContent = num1;
    } else if (flag === 1) {
      num2 = num2.concat(btn.value);
      displaydiv.textContent = num2;
    }
  });
});
