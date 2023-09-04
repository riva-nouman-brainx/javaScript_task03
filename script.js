const form = document.getElementById("form");
const entry = document.getElementById("input-task");
const listOfThings = document.getElementById("list-of-things");
const hiddenSubmit = document.getElementById("hiddenSubmit");
entry.addEventListener("keypress", inputFunction);
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
            <input type="checkbox">
            <div class="m-2"> 
                ${val}
            </div>
        </div>
        <div class="d-flex">
            <i class="fa fa-edit edit jus p-2" id="icon1"></i>
            <i class="fa fa-trash del p-2" id="icon2"></i>
        </div>`;
    
    listOfThings.append(li);
    

}

