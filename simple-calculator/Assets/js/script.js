let s = '';
const myInput = document.querySelector("input");
function update()
{
    myInput.value = s;
}

function clearS()
{
    s = '';
    update();
}

function clearC()
{
    s = s.substring(0,s.length-1);
    update();
}

function read( a )
{
    s = s+a;
    update();
}

function process()
{
    try{
        s = eval(s);
        update();
    }
    catch{
        s = "";
        myInput.value = "Wrong expression!";
    }
}