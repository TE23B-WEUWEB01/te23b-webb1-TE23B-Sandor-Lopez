var loop = true;
var rättålder = 15;

while(loop == true ) 
{
    var svar = prompt("hur gammal är du?")
    if (svar >= rätttålder)
    {
        alert("grattis du får se filmen")
        loop=false
    }
    else(alert("du får INTE se filmen"))
}