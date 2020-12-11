// Calculate whether the given number is prime number or not.


var btnCalculate = document.querySelector("#btn-calculate");
btnCalculate.addEventListener("click",clickHandler);

function clickHandler() {
    var inputNumber = document.querySelector("#numberInput").value;
    var outputText = document.querySelector("#outputText");
    var prime = checkPrime(inputNumber);
    if(prime === "X"){
        outputText.innerText = "The Number is a prime number";
    }else {
        outputText.innerText = "The Number is not a prime number";
    }
}

function checkPrime(inputNumber) {
    if(inputNumber === ""){
        return "";
    }

    if(inputNumber === "2"){
        return "X";
    }

    for(var i=2; i<(inputNumber-1); i++) {
        if(inputNumber % 2 === 0){
            return "";
        }
    }
    return "X";
}


