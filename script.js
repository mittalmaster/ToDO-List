


function getInputValue(){
    
    var ul = document.querySelector(".todoList");//get ul class
    var li = document.createElement("li");//get list 

   
   
    var val = document.getElementById("todo").value;//get input value
  
    
    var inj = document.createTextNode(val);//create node of it
  
    li.appendChild(inj);
    
    //all this is button property
    var crossButton = document.createElement("Button");//create button
    crossButton.classList.add("del");
    crossButton.setAttribute('content','text Content');
    crossButton.textContent = "Cut";
    crossButton.style.margin="5px";
    crossButton.onclick=function() {
        ul.removeChild(li);
     }
    
    
  
    



    li.appendChild(crossButton);
    ul.appendChild(li);
   
    
    document.getElementById("todo").value="";
   


}