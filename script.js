let result=document.getElementById("add");

function calculator(number){
    result.value = result.value+number;
    
}


function Result(){
    try{
        result.value=eval(result.value)
    }

    catch(err){
        alert("Enter the valid number");
    }
}

function clr(){
    result.value ="";
}

function del(){
    result.value=result.value.slice(0,-1);
}
