function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

let num1, operator, num2;

function operate(operator,num1,num2){
    if (operator === '+')
        return add(num1,num2);

    if (operator === '-')
        return subtract(num1,num2);

    if (operator === '*')
        return multiply(num1,num2);

    if (operator === '/')
        return divide(num1,num2);
}

let disp_content = [];
const displaydiv = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        disp_content.push(btn.value);
        console.log(disp_content);
        const show_disp = disp_content.reduce((acc,iter)=>{
            return acc.toString() + iter.toString();
            
        })
        displaydiv.textContent = show_disp;
    })
})

