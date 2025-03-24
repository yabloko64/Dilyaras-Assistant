document.addEventListener("DOMContentLoaded", () => {
    const habitInput = document.getElementById("habitInput");
    const addHabitBtn = document.getElementById("addHabitBtn");
    const habitList = document.getElementById("habitList");

    // Загрузка привычек из localStorage
    const habits = JSON.parse(localStorage.getItem("habits")) || [];

    function renderHabits() {
        habitList.innerHTML = "";
        habits.forEach((habit, index) => {
            const li = document.createElement("li");
            li.textContent = habit.name;

            // Прогресс выполнения
            const progress = document.createElement("span");
            progress.textContent = ` (${habit.progress}/30 дней)`;
            
            // Кнопка "Выполнено"
            const doneBtn = document.createElement("button");
            doneBtn.textContent = "✅";
            doneBtn.onclick = () => {
                if (habit.progress < 30) {  //прогресс увеличивается не больше 30 
                    habits[index].progress++;
                    saveHabits();
                    renderHabits();
                }
            };

            // Кнопка удаления привычки
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑️";
            deleteBtn.onclick = () => {
                habits.splice(index, 1);
                saveHabits();
                renderHabits();
            };

            //Добавляем элементы в <li> и в список
            li.appendChild(progress);
            li.appendChild(doneBtn);
            li.appendChild(deleteBtn);
            habitList.appendChild(li);
        });
    }

    function saveHabits() {
        localStorage.setItem("habits", JSON.stringify(habits));
    }

        //добавление новой привычки
    addHabitBtn.addEventListener("click", () => {
        const habitText = habitInput.value.trim();
        if (habitText) {
            habits.push({ name: habitText, progress: 0 });
            saveHabits();
            renderHabits();
            habitInput.value = "";
        }
    });

    renderHabits();
});


