const todoinput=document.getElementById("todo-input")
const todocontainer=document.getElementById("list-container")

function addtask(){
    if(todocontainer.value===''){
        alert("you must enter something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=todoinput.value;
        todocontainer.appendChild(li);
    }
    todoinput.value=""
}