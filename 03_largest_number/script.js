

document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let firstNumber = Number(document.getElementById("firstNumber").value);

    let secondNumber = Number(document.getElementById("secondNumber").value);

    let thirdNumber = Number(document.getElementById("thirdnumber").value);

    let result = document.getElementById("result");


    if(firstNumber>=secondNumber && firstNumber>= thirdNumber){
        result.innerHTML = firstNumber + " is largest Number"
    }
    else if(secondNumber>=firstNumber && secondNumber>=thirdNumber){
        result.innerHTML = secondNumber + " is largest Number"
    }

    else{
        result.innerHTML = thirdNumber + " is largest Number"
    }
});