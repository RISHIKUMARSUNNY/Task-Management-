let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");
let addTaskButton = document.getElementById("add-task-btn"); // Get the Add Task button

// Function to add a task
function addTask() {
  if (inputBox.value.trim() === "") {
    // Check if input is empty or only whitespace
    alert("Please Enter a Task");
  } else {
    const task = document.createElement("li");
    task.textContent = inputBox.value;
    listContainer.appendChild(task);

    // Create delete (×) button
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    task.appendChild(span);
    span.style.right = "0px";
  }
  inputBox.value = ""; // Clear the input box after adding the task
  saveData(); // Save the updated task list to localStorage
}

// Add task when clicking the "Add Task" button
addTaskButton.addEventListener("click", addTask); // Bind the click event to the button

// Add task when pressing the "Enter" key
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Check if the Enter key is pressed
    addTask(); // Call addTask function
  }
});

// Mark task as checked or delete when clicking on list items
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// Save tasks to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Display tasks from localStorage when the page is loaded
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Display the saved tasks on page load
