function add(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {

        return "Invalid input";

    } else {

        const result = num1 + num2;

        return result;

    }
}
  
function subtract(num1, num2) {


    if (isNaN(num1) || isNaN(num2)) {

        return "Invalid input";

    } else {

        const result = num1 - num2;

        return result;

    }
}
  
  function multiply(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {

        return "Invalid input";

    } else {


        const result = num1 * num2;

        return result;
    }
}
  
function divide(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {

        return "Invalid input";

    } else if (num2 === 0) {

        return "Cannot divide by zero";

    } else {

        const result = num1 / num2;

        return result;
    }
}

function operate(operation){

    let ans;

    let num1;
    let num2;

    try {
        
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    } catch (error) { //only for testing
        num1 = 2;
        num2 = 5;
    }

    switch(operation){

        case 1: ans = add(num1, num2);
        break;
        case 2: ans = subtract(num1, num2);
        break;
        case 3: ans = divide(num1, num2);
        break;
        case 4: ans = multiply(num1, num2);
        break;
        default: ans = null;

    }

    document.getElementById("result").innerHTML = ans;
    document.getElementById("num2").value = ans;

    return ans;
}


module.exports = {
    add,
    subtract,
    multiply,
    divide
};