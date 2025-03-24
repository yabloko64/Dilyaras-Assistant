document.addEventListener("DOMContentLoaded", () => {
    const diaryInput = document.getElementById("diaryInput");
    const saveEntry = document.getElementById("saveEntry");
    const diaryList = document.getElementById("diaryList");

    // Загружаем записи из localStorage
    function loadEntries() {
        diaryList.innerHTML = "";
        let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        
        entries.forEach((entry, index) => {
            let li = document.createElement("li");
            li.textContent = entry;
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.onclick = () => deleteEntry(index);
            li.appendChild(deleteBtn);
            diaryList.appendChild(li);
        });
    }

    // Сохраняем новую запись
    saveEntry.addEventListener("click", () => {
        let text = diaryInput.value.trim();
        if (text) {
            let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
            entries.push(text);
            localStorage.setItem("diaryEntries", JSON.stringify(entries));
            diaryInput.value = "";
            loadEntries();
        }
    });

    // Удаление записи
    function deleteEntry(index) {
        let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        entries.splice(index, 1);
        localStorage.setItem("diaryEntries", JSON.stringify(entries));
        loadEntries();
    }

    loadEntries(); // Загружаем записи при открытии страницы
});
