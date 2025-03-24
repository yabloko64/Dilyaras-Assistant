document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");  //находит поле ввода
    const addTaskBtn = document.getElementById("addTaskBtn");  //кнопка добавления задачи
    const taskList = document.getElementById("taskList");  //список задач

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  //загрузка из локалсторадж

    function renderTasks() {        //функц для отображения списка
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            
            // кнопка удаления
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑️";
            deleteBtn.onclick = () => {  //удаление по нажатию на кнопку
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            };

            li.appendChild(deleteBtn);  
            taskList.appendChild(li);
        });
    }

    //функц сохранения в локалсторадж
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText);
            saveTasks();
            renderTasks();
            taskInput.value = "";
        }
    });

    renderTasks();
});
