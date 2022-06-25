function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal < 1){
        alert("Enter a positive number");
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    
    
    document.getElementById("result").innerText= "If you deposit ";
    document.getElementById("a").innerText=principal;
    document.getElementById("result2").innerText=",\nat an interest rate of ";
    document.getElementById("a2").innerText=rate;
    document.getElementById("result3").innerText="%,\nYou will receive an amount of ";
    document.getElementById("a3").innerText=interest;
    document.getElementById("result4").innerText=",\nin the year ";
    document.getElementById("a4").innerText=year;
    //document.getElementById("result").innerText= "If you deposit "+ principal+",\nat an interest rate of "+rate+"%\nYou will receive an amount of "+interest+",\nin the year "+year+"\n";

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
