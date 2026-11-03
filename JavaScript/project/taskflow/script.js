const taskButton=document.getElementById("taskbutton");
const addTaskButton=document.getElementById("addtask");
const modalHeading = document.querySelector(".input-heading h2");
const submitTaskBtn = document.getElementById("submitTaskBtn");
const deleteModal = document.getElementById("deleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

let taskToDelete = null;

let editingTask = null;
let tasks=[];
function saveTasks() {
    localStorage.setItem("taskflowTasks", JSON.stringify(tasks));
}
function loadTasks() {
    const savedTasks = localStorage.getItem("taskflowTasks");

    if (savedTasks !== null) {
        tasks = JSON.parse(savedTasks);
    }
}

const pendingTask = document.getElementById("pendingtask");
const completeTask = document.getElementById("completetask");
const totalTask=document.getElementById("totaltask")

const taskList=document.getElementById("tasklist");
const emptyState=document.getElementById("emptystate");

const taskModal=document.getElementById("taskModal");
const closeModal=document.getElementById("closeModal");

taskButton.addEventListener("click",()=>{
    taskModal.classList.add("show");

});
addTaskButton.addEventListener("click",()=>{
    taskModal.classList.add("show");

});
closeModal.addEventListener("click",() =>{
    taskModal.classList.remove("show");
});
taskModal.addEventListener("click",(event)=>{
    if(event.target==taskModal){
        taskModal.classList.remove("show");
    }
});

const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value.trim();
    const description = document.getElementById("taskDesc").value.trim();
    const startDate = document.getElementById("startDate").value;
    const dueDate = document.getElementById("duetDate").value;

    if (title === "") {
        alert("Please enter a task title!");
        return;
    }
    const newTask = {
    id: Date.now(),
    title: title,
    description: description,
    startDate: startDate,
    dueDate: dueDate,
    completed: false
};

tasks.push(newTask);

saveTasks();

    const task=document.createElement("div");
    task.classList.add("task-card");


    const checkbox=document.createElement("input");
    checkbox.type="checkbox";

    const details=document.createElement("div");
    details.classList.add("task-details");

    const heading=document.createElement("h3");
    heading.textContent=title;

    const desc = document.createElement("p");
    desc.textContent = description;

    const dates = document.createElement("p");
    dates.textContent = `${startDate} ↔ ${dueDate}`;

    const status=document.createElement("span");
    status.textContent="pending";
    status.classList.add("task-status","pending");

    checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
            status.textContent="Completed";
            status.className="task-status completed";
            heading.classList.add("completed-title");
            desc.classList.add("completed-description");

            editButton.classList.add("hidden");
            undoButton.classList.remove("hidden");

        }else{
            status.textContent="Pending";
            status.className="task-status pending";
            heading.classList.remove("completed-title");
            desc.classList.remove("completed-description");

             editButton.classList.remove("hidden");
            undoButton.classList.add("hidden");
        }
        updateTaskCounts();
    });

    const undoButton=document.createElement("button");
    undoButton.type="button";
    undoButton.classList.add("icon-button");

    const undoIcon=document.createElement("img");
    undoIcon.src="./undo.png";
    undoIcon.alt="Undo";

    undoButton.appendChild(undoIcon);
    undoButton.classList.add("hidden");

    undoButton.addEventListener("click",()=>{
        checkbox.checked=false;
        checkbox.dispatchEvent(new Event("change"));
    });

    const editButton=document.createElement("button");
    editButton.type="button";
    editButton.classList.add("icon-button");

    const editIcon=document.createElement("img");
    editIcon.src="./edit.png";
    editIcon.alt="Edit";


    editButton.appendChild(editIcon);


    editButton.addEventListener("click",()=>{
        editingTask={
            task:task,
            heading:desc,
            dates:dates,
            status:status
        };
         document.getElementById("taskTitle").value = heading.textContent;
        document.getElementById("taskDesc").value = desc.textContent;

        const dateValues = dates.textContent.split(" ↔ ");
        document.getElementById("startDate").value = dateValues[0];
        document.getElementById("duetDate").value = dateValues[1];

        modalHeading.textContent = "Edit Task";
        submitTaskBtn.textContent = "Save Changes";

        taskModal.classList.add("show");
       
    });
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("icon-button");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./delete.png";
    deleteIcon.alt = "Delete";

    deleteButton.appendChild(deleteIcon);

   deleteButton.addEventListener("click", () => {
    taskToDelete = task;
    deleteModal.classList.add("show");
});
    
    details.append(heading,desc,dates,status);
    task.append(checkbox,details,editButton,undoButton,deleteButton);
    taskList.appendChild(task);


  updateTaskCounts();

    emptyState.style.display = "none";

    taskForm.reset();
    taskModal.classList.remove("show");
});

function updateTaskCounts(){
    const tasks=taskList.querySelectorAll(".task-card");
    const completed=taskList.querySelectorAll(".task-status.completed").length;

    totalTask.textContent=tasks.length;
    completeTask.textContent=completed;
    pendingTask.textContent=tasks.length-completed;
    emptyState.style.display=tasks.length===0?"block":"none";
}

cancelDelete.addEventListener("click",()=>{
    deleteModal.classList.remove("show");
    taskToDelete=null;
});

confirmDelete.addEventListener("click", () => {
    if (taskToDelete) {
        tasks = tasks.filter(
            (task) => task.id !== taskToDelete.id
        );

        saveTasks();
        renderTasks();

        taskToDelete = null;
    }

    deleteModal.classList.remove("show");
});

deleteModal.addEventListener("click", (event) => {
    if (event.target === deleteModal) {
        deleteModal.classList.remove("show");
        taskToDelete = null;
    }
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((taskData) => {
        const task = document.createElement("div");
        task.classList.add("task-card");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskData.completed;

        const details = document.createElement("div");
        details.classList.add("task-details");

        const heading = document.createElement("h3");
        heading.textContent = taskData.title;

        const desc = document.createElement("p");
        desc.textContent = taskData.description;

        const dates = document.createElement("p");
        dates.textContent =
            `${taskData.startDate} ↔ ${taskData.dueDate}`;

        const status = document.createElement("span");
        status.classList.add("task-status");

        function updateStatus() {
            taskData.completed = checkbox.checked;

            status.textContent = checkbox.checked
                ? "Completed"
                : "Pending";

            status.className = checkbox.checked
                ? "task-status completed"
                : "task-status pending";

            heading.classList.toggle(
                "completed-title",
                checkbox.checked
            );

            desc.classList.toggle(
                "completed-description",
                checkbox.checked
            );

            editButton.classList.toggle(
                "hidden",
                checkbox.checked
            );

            undoButton.classList.toggle(
                "hidden",
                !checkbox.checked
            );

            saveTasks();
            updateTaskCounts();
        }

        checkbox.addEventListener("change", updateStatus);

        const undoButton = document.createElement("button");
        undoButton.type = "button";
        undoButton.classList.add("icon-button", "hidden");

        const undoIcon = document.createElement("img");
        undoIcon.src = "./undo.png";
        undoIcon.alt = "Undo";
        undoButton.appendChild(undoIcon);

        undoButton.addEventListener("click", () => {
            checkbox.checked = false;
            updateStatus();
        });

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.classList.add("icon-button");

        const editIcon = document.createElement("img");
        editIcon.src = "./edit.png";
        editIcon.alt = "Edit";
        editButton.appendChild(editIcon);

        editButton.addEventListener("click", () => {
            editingTask = taskData;

            document.getElementById("taskTitle").value =
                taskData.title;

            document.getElementById("taskDesc").value =
                taskData.description;

            document.getElementById("startDate").value =
                taskData.startDate;

            document.getElementById("duetDate").value =
                taskData.dueDate;

            modalHeading.textContent = "Edit Task";
            submitTaskBtn.textContent = "Save Changes";
            taskModal.classList.add("show");
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("icon-button");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./delete.png";
        deleteIcon.alt = "Delete";
        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener("click", () => {
            taskToDelete = taskData;
            deleteModal.classList.add("show");
        });

        details.append(heading, desc, dates, status);
        task.append(
            checkbox,
            details,
            editButton,
            undoButton,
            deleteButton
        );

        taskList.appendChild(task);

        updateStatus();
    });

    updateTaskCounts();
}


function loadTasks() {
    const savedTasks = localStorage.getItem("taskflowTasks");

    if (savedTasks !== null) {
        tasks = JSON.parse(savedTasks);
    }
    renderTasks();
}
loadTasks();

