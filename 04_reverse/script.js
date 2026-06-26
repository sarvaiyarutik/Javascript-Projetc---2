document.getElementById("form").addEventListener("submit",(e)=>{


    e.preventDefault();

    let input_id = document.getElementById("input_id").value;

    let reverse = "";

    for(let i=input_id.length-1;i>=0;i--){
        reverse+=input_id[i];
    }

    document.getElementById("result").innerText = "reverse = "+ reverse;
})