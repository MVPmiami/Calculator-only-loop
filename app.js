var leftOperand;
var operator;
var rightOperand;

for(leftOperand = prompt("Левый операнд"); isNaN(leftOperand);leftOperand = +leftOperand){
    alert("Введите число!");
    leftOperand = prompt("Левый операнд");
}