function compute()
{
    var prin = parseInt(document.getElementById("principal").value);
    if(isNaN(prin)||prin<=0)
    { 
        document.getElementById("alert").innerHTML = "Enter a positive number to calculate"; 
        document.getElementById("wpr").className = "maindiv error";
        document.getElementById("principal").focus();
    }
    else
    {
        var rate = document.getElementById("rate").value;
        var year = document.getElementById("years").value;
        var fyea = new Date().getFullYear()+parseInt(year);

        var amount = prin * year * rate /100;
        var fmt = new Intl.NumberFormat();
        
        document.getElementById("result").innerHTML = "<p>If you deposit <b>$"+fmt.format(prin)+"</b>,<br>at an interest rate of <b>"+rate+"%</b>.<br>You will receive an amount of <b>$"+fmt.format(amount)+"</b>,<br>in the year <b>"+fyea+"</b></p>"
        document.getElementById("wpr").className = "maindiv result";
    }
}
function reset()
{
    document.getElementById("wpr").className = "maindiv";
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = 10.25;
    document.getElementById("rate_val").innerText="10.25%";
    document.getElementById("years").value = 1;
    document.getElementById("principal").focus();
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}