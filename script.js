let btn = document.getElementById("btn");
let task = document.getElementById("task");
let list = document.getElementById("list");

let editElement;

btn.addEventListener("click", () => {

    // 🔴 EMPTY TASK CHECK
    if (task.value == "") {
        alert("Please enter a task");
        return;
    }
    if (btn.innerText == "Add Task") {

        // 🔴 DUPLICATE TASK CHECK
        let tasks = document.querySelectorAll(".box li");
        for (let t of tasks) {
            if (t.innerText === task.value) {
                alert("Task already added");
                return;
            }
        }

        list.innerHTML += `
        <div class="box">
            <li>${task.value}</li>
            <div class="box2">
                <button onclick="edit(this)">Edit</button>
                <button onclick="del(this)">Delete</button>
            </div>
        </div>`;

        task.value = "";
    } 
    else {
        editElement.innerText = task.value;
        btn.innerText = "Add Task";
        task.value = "";
    }
});

function edit(element) {
    editElement = element.parentNode.parentNode.firstElementChild;
    task.value = editElement.innerText;
    btn.innerText = "Save";
}

// 🗑️ DELETE FUNCTION
function del(element) {
    element.parentNode.parentNode.remove();
    task.value="";
}
