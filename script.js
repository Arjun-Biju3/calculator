function btnclick(val)
{
    document.getElementById("out").value+=val
}


function clearScrn()
{
    document.getElementById("out").value=""
}

function result()
{
    var text=document.getElementById("out").value
    var res=eval(text)
    document.getElementById('out').value=res
}