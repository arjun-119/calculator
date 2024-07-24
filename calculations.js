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
  if (operator === "+") 
    {displaydiv.textContent = add(num1, num2)};

  if (operator === "-") return displaydiv.textContent = subtract(num1, num2);

  if (operator === "*") return displaydiv.textContent = multiply(num1, num2);

  if (operator === "/") return displaydiv.textContent = divide(num1, num2);
}

const displaydiv = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let num1 = (num2 = "");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
console.log(btn.value);
    if (btn.value === "AC") {
        displaydiv.textContent = '0';
        num1 = '';
        num2 = '';
        flag = 0;
        operator = '';
        return;
    }

    if (
      btn.value === "+" ||
      btn.value === "-" ||
      btn.value === "*" ||
      btn.value === "/"
    ) {
      flag = 1;
      displaydiv.textContent = "0";
      operator = btn.value;
      return;
    }
    if (btn.value === "="){ 
        operate(operator, +num1, +num2)
        num1 = '';
        num2 = '';
        flag = 0;
        operator = '';
        
    };

      if (flag === 0) {
        num1 = num1.concat(btn.value);
        displaydiv.textContent = num1;
      }

      if (flag === 1) {
        num2 = num2.concat(btn.value);
        displaydiv.textContent = num2;
      }
    
  });
});
