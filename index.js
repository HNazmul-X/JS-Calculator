const calculatorInput =  document.getElementById('calculator-input');

let numberKey = document.querySelectorAll('.number-key button');
for(var i = 0; i < numberKey.length - 1; i ++){
    numberKey[i].addEventListener('click',function(event){
        calculatorInput.value += event.target.innerText;
        
    })
}
var result = ''
let oparatorKey = document.querySelectorAll(".oparator-key button");
for(var i = 0; i < oparatorKey.length; i ++){
    oparatorKey[i].addEventListener('click',function(event){
        var currentValue = event.target.innerText
        if (currentValue == "x") {
            console.log(currentValue);
            currentValue = "*";
        }
        else if (currentValue == "÷") {
            currentValue = "/";
        }
        
        const newCalculatorValue = calculatorInput.value += currentValue;
        calculatorInput.value = newCalculatorValue;
    })
}
const getInputResult = document.querySelector(".equel");

getInputResult.addEventListener('click', function (e) {
    result = eval(calculatorInput.value)
    calculatorInput.value = result;
});
document.querySelector(".clear").addEventListener('click',function(e){
    calculatorInput.value = '';
})