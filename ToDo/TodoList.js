const  i = document.getElementById("input");
const  j = document.getElementById("listCo");



function addTask()
{
    if (i.value === "" )
        {
            alert("ypu must write something");

        }
        else{
            let li = document.createElement("li");
            li.innerHTML = i.value;
            j.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
}


j.addEventListener ("click",function(e){
    if (e.target.tagName ==="SPAN")
        {
            e.target.parentElement .remove();
        }
},false)