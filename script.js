
const display=document.getElementById("display");
var x="";

function appendToDisplay(input)
{
    display.value+=input;
}

function clearDisplay()
{
    display.value ="";
}

function clearOneDisplay()
{
    var a=display.value;
    var b="";
    for(let i=0;i<a.length-1;i++)
    {
        b=b+a.charAt(i);
    }
    display.value=b;
}

function displayPrev()
{
    appendToDisplay(x);
}

function calculate()
{
    try{
        display.value=eval(display.value);
        x=display.value;
    }
    catch(error)
    {
        display.value="Syntax Error";
    }
}