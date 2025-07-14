//Wait for the DOM to fully load before JavaScript runs
document.addEventListener("DOMContentLoaded", function(){

// Function to handle adding a new task to the list    
function addTask(){

}

// Select DOM elements: the Add Task button, input field, and task list
const addButton = document.getElementById("add-task-btn")    

const taskInput = document.getElementById("task-input")

const taskList = document.getElementById("task-list")

function addTask() {
   let taskText = taskInput.value.trim()


   //If the input is empty, this alerts the user
    if (taskText === "") {
        alert("Please enter a task!")
    }else {
        // Create a new list item element to hold the task
       const listItem = document.createElement("li")
       listItem.textContent = taskText

      // Create a "Remove" button and style it
       const buttonEl = document.createElement("button")
       buttonEl.textContent = "Remove"
       buttonEl.className = "remove-btn"

      // Add an event listener to remove the task when "Remove" is clicked
       buttonEl.addEventListener("click", function(){
       this.closest("li").remove()
    })
    // Append the remove button to the list item
    listItem.appendChild(buttonEl)

    // Append the list item to the task list
    taskList.appendChild(listItem)

    // Clear the input field for the next task
    taskInput.value = ""
    }
}
// Select DOM elements: the Add Task button, input field, and task list

// Add event listener to the button to trigger addTask on click
addButton.addEventListener("click", addTask)

// Also allow adding task by pressing Enter key inside the input field
taskInput.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        addTask()
    }
})




})