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
  else if (operator === "/") result = divide(num1, num2);
  displaydiv.textContent = result;
  operator = '';
}

const displaydiv = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let num1 = (num2 = "");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.value);
    if (btn.value === "AC") {
      displaydiv.textContent = "0";
      num1 = "";
      num2 = "";
      flag = 0;
      operator = "";
      return;
    }

    else if (
      btn.value === "+" ||
      btn.value === "-" ||
      btn.value === "*" ||
      btn.value === "/"
    ) {
      //if flag is already 1 then call operate()
      flag = 1;
      displaydiv.textContent = "0";
      operator = btn.value;
      return;
    }
    else if (btn.value === "=") {
      operate(operator, +num1, +num2);
      num1 = String(result);
      num2 = "";
      flag = 0;

      return;
    }

    else if (flag === 0) {
      num1 = num1.concat(btn.value);
      displaydiv.textContent = num1;
    }

    else if (flag === 1) {
      num2 = num2.concat(btn.value);
      displaydiv.textContent = num2;
    }
  });
});
