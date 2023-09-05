const form = document.getElementById("form");
const entry = document.getElementById("input-task");
const listOfThings = document.getElementById("list-of-things");
entry.addEventListener("keypress", inputFunction);
let listCount=0;
function inputFunction(event){
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        let value=entry.value;
        if(value){
            createLIS(value);
        }
        entry.value=''; 
    }
}

function createLIS(val){
    const li=document.createElement('li');
    li.className='list-item';
    li.innerHTML=`
        <div class="d-flex align-items-center">
            <input type="checkbox" id="box-${listCount}">
            <div class="m-2"> 
                ${val}
            </div>
        </div>
        <div class="d-flex">
            <i class="fa fa-edit edit jus p-2" id="icon1"></i>
            <i class="fa fa-trash del p-2" id="icon2"></i>
        </div>`;
    
    listOfThings.append(li);
    
    li.querySelector('#icon1').addEventListener("click", editEntry);
    li.querySelector('#icon2').addEventListener("click", delEntry);
    const checkbox = document.getElementById("box-"+listCount);
    checkbox.addEventListener("change", checkEntry);
    listCount++;
}
function editEntry(event){
    const tempArr=event.target.parentElement.previousElementSibling.children;
    const inputElement=tempArr[0];
    inputElement.type = "text";
    inputElement.style.height="28px";
    inputElement.value=inputElement.nextElementSibling.innerHTML.trim();
    inputElement.nextElementSibling.innerHTML="";
    inputElement.addEventListener("keypress", function(event) {
       if(event.key=="Enter" && inputElement.value.length!==0){
        inputElement.nextElementSibling.innerHTML=inputElement.value;
        inputElement.type = "checkbox";
        inputElement.blur();
       }
       else if (event.key=="Enter" && inputElement.value.length===0){
        alert("Don't leave the field empty");
       }
      });

}
function delEntry(event){
    listOfThings.removeChild(event.target.parentElement.parentElement);

}
function checkEntry(event){
    console.log(event)
    const checkbox = event.target;
    const siblingDiv = checkbox.nextElementSibling;
    if (siblingDiv) {
        if(checkbox.checked){
            siblingDiv.style.textDecoration = "line-through"; 
        }
        else{
            siblingDiv.style.textDecoration = "none"; 
        }
    }
}

