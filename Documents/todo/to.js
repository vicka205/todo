const inputBox = document.getElementById("EnterAtask");
const listContainer = document.getElementById("taskList");
const dateInput = document.getElementById("taskDate");

function AddTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
        // When the inputbox is empty, show alert
    } else {
        let li = document.createElement("li");
        li.className = "task";
        // create "li" (the task that is entered in the inputbox)
        
        const selectedDate = dateInput.value;
        const formattedDate = selectedDate ? ` (${selectedDate})` : "";
        // Date editing

        li.innerHTML = `<span class="taskText"> ${inputBox.value}${formattedDate} </span> <div class="buttonGroup"> <button class="editBtn"> Edit </button> <button class="deleteBtn"> Delete </button> </div>`;
        // Text from inbutbox, date, "edit" button and "delete" button shown in the "taskLIst"

        listContainer.appendChild(li);
        // adding a new <li> (list item) to the "taskList"
        inputBox.value = "";
        // when the task is created, clear the "inputBox"
        dateInput.value = "";
        // when teh task is created, clear the "dateInput"

        attachTaskListeners(li);
        // calls the functions
    }
}

function attachTaskListeners(taskElement) {
    const deleteBtn = taskElement.querySelector(".deleteBtn");
    const editBtn = taskElement.querySelector(".editBtn");
    // finds "deleteBtn" and "editBtn"

    deleteBtn.addEventListener("click", function () {
        taskElement.remove();
    });

    editBtn.addEventListener("click", function () {
        const taskText = taskElement.querySelector(".taskText");
        const newText = prompt("Edit your task:", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            // when the user enters something valid
            taskText.textContent = newText;
        }
    });
}

document.querySelectorAll(".task").forEach(task => {
    attachTaskListeners(task);
    // all "tasks" have the options "delete" and "edit"
});