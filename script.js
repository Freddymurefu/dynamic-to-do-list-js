//Wait for the DOM to fully load before JavaScript runs
document.addEventListener("DOMContentLoaded", function(){

    // Select DOM elements: the Add Task button, input field, and task list
const addButton = document.getElementById("add-task-btn")    
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

loadTasks() //load saved tasks from Local storage once page loads

function loadTasks() {
const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
storedTasks.forEach(taskText=> addTask(taskText, false)) // 'false' indicates not to save again to Local Storage

}

    
// Function to handle adding a new task to the list    
function addTask(taskText = null, save = true) {
    if (!taskText) {
        taskText = taskInput.value.trim();
    }

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Remove";
    buttonEl.classList.add("remove-btn");

    buttonEl.addEventListener("click", function () {
        listItem.remove();
        removeTask(taskText); // Remove from localStorage
    });

    listItem.appendChild(buttonEl);
    taskList.appendChild(listItem);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = "";
}
function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
}



// Add event listener to the button to trigger addTask on click
addButton.addEventListener("click", () => addTask())

// Also allow adding task by pressing Enter key inside the input field
taskInput.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        addTask()
    }
})




})