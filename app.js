var leftOperand;
var operator;
var rightOperand;

for(leftOperand = prompt("Левый операнд"); isNaN(leftOperand);leftOperand = +leftOperand){
    alert("Введите число!");
    leftOperand = prompt("Левый операнд");
}

do{
    operator = prompt("Оператор");

    if(operator != "+" && operator != "-" && operator != "*" && operator != "/" && operator != "="){
        alert("Введите корректный оператор(+, -, *, /)");
    }

    if(operator == "+"){// ЦИКЛ СЛОЖЕНИЯ.
        rightOperand = prompt("Правый операнд");
        if(isNaN(rightOperand)){
            alert("Введите число!");
            rightOperand = prompt("Правый операнд");
        }
        leftOperand = +leftOperand + +rightOperand;
    }else if(operator == "="){
        alert(`Result: ${leftOperand}`);
        break;
    }

    if(operator == "-"){// ЦИКЛ ВЫЧИТАНИЯ.
        rightOperand = prompt("Правый операнд");
        if(isNaN(rightOperand)){
            alert("Введите число!");
            rightOperand = prompt("Правый операнд");
        }
        leftOperand = +leftOperand - +rightOperand;
    }else if(operator == "="){
        alert(`Result: ${leftOperand}`);
        break;
    }
    
} while (operator != "=");