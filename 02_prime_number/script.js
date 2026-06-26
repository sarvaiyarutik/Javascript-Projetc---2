

document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let num = Number(document.getElementById("num").value);

    let result = document.getElementById("result")

    let prime = true;

    if(num <= 1){
        prime = false;
    }

    for(let i=2;i<num;i++){
        if(num % i === 0){
            prime = false;
        }

    }

    if(prime){
        result.innerText = "Prime Number";
    }
    else{
        result.innerText = "Not a Prime Number"
    }
})