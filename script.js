function compute()
{
    //This function computes the value of the Interes based on some other values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years); //compute the actual year
    if(principal ==0 || principal <0 || principal ==""){
        alert("Enter a positive number")
        document.getElementById("principal").focus() //setting the focus on this box
    }
    else{
        document.getElementById("result").innerHTML = "\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year;
    }
}

function updateRate()
//This function updates the value of the slide bar and writes it to the span element id "rate_val"
{
    var rateval = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerText =  rateval + "%";
    
}