function calculator(){
    let result;
    let num1 = parseInt(prompt("Enter a first number for calculate"));
    let operator = prompt("Enter a symbol");
    let num2 = parseInt(prompt("Enter a second number for calculate"));

    switch(operator){
        case "+":
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`)
            break;
        case "-":
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`)
            break;
        case "*":
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`)
            break;
        case "/":
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result}`)
            break;
        default:
            console.log("Invalid operator");
    }
}
calculator();