let num1, num2 = 0;
let is_add, is_mult, is_sub, is_div, is_reset = false;
let no_period = true;

function addToDisplay(num) {
    const display = document.getElementById('bottom-num');
    if (num === '.') { 
        if (display.innerHTML.indexOf('.') === -1) { no_period = true; }
        else { no_period = false; }
        if (!is_reset && no_period) {
            const new_value = display.innerHTML + num;
            display.innerHTML = new_value;
        } else {
            display.innerHTML = num;
            is_reset = false;
        }
    } else {
        if (!is_reset) {
            const new_value = display.innerHTML + num;
            display.innerHTML = new_value;
        } else {
            display.innerHTML = num;
            is_reset = false;
        }
    }
}

function backspace() {
    const display = document.getElementById('bottom-num');
    new_value = display.innerHTML.slice(0, -1);
    display.innerHTML = new_value;
}

function reset(x, y) {
    document.getElementById('bottom-num').innerHTML = y;
    document.getElementById('top-num').innerHTML = x;
    is_add = false;
    is_div = false;
    is_mult = false; 
    is_sub = false;
    num1 = y;
    num2 = 0;
    is_reset = true;
}

function getOperation(operator) {
    const bot_number = document.getElementById('bottom-num')
    const top_number = document.getElementById('top-num')
    num1 = parseFloat(bot_number.innerHTML);
    console.log(num1);
    if (operator === 'add') { is_add = true; }
    else if (operator === 'sub') { is_sub = true; }
    else if (operator === 'div') { is_div = true; }
    else if (operator === 'mult') { is_mult = true; }
    top_number.innerHTML = bot_number.innerHTML;
    bot_number.innerHTML = '';
}

function calculate() {
    const bot_number = document.getElementById('bottom-num');
    const top_number = document.getElementById('top-num');
    num2 = parseInt(bot_number.innerHTML);
    if (is_mult) { 
        top_number.innerHTML = num1 + '*' + num2;
        bot_number.innerHTML = multiply(num1, num2) 
    } else if (is_add) {
        top_number.innerHTML = num1 + '+' + num2; 
        bot_number.innerHTML = add(num1, num2) 
    } else if (is_div) { 
        top_number.innerHTML = num1 + '/' + num2;
        bot_number.innerHTML = divide(num1, num2) 
    } else if (is_sub) { 
        top_number.innerHTML = num1 + '-' + num2;
        bot_number.innerHTML = subtract(num1, num2) 
    }

    reset(top_number.innerHTML, bot_number.innerHTML);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}