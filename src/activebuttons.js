// btns

export function initalizeButtons(){
    const createProjectBtn = document.querySelector("#create_btn")
    const addTaskBtn = document.querySelector(".add_task_btn")
    const arrowShowProjectBtn = document.querySelector("#arrow")

    createProjectBtn.addEventListener("click", handleCreateProjectBtn)
    addTaskBtn.addEventListener("click", handleAddTaskBtn)
    arrowShowProjectBtn.addEventListener("click", handleArrowShowProjectBtn)
}

function handleCreateProjectBtn(event) {
    let projectForm = document.getElementById("hiddenForm").style.display = "block"
}
function handleAddTaskBtn(event) {
    let taskForm = document.getElementById('hiddenTaskForm').style.display = 'block'
    handleFormTaskProjectSelect()
}

function handleArrowShowProjectBtn(event){
    event.target.classList.toggle("down");
    let ariaExpaned = event.target.classList.contains("down")
    
    const navProjectList = document.querySelector("#projectList")
    if (!ariaExpaned)
    {
        navProjectList.className = "nav-project"
    } 
    else{
        navProjectList.className = "dropdown"
    }
}

initalizeButtons()
