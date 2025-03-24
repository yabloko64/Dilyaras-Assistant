document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const languageSelect = document.getElementById("languageSelect");

    // === ТЁМНАЯ ТЕМА ===
    if (localStorage.getItem("darkTheme") === "enabled") {  //проверка включена ли темная тема
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("darkTheme", "enabled");
        } else {
            document.body.classList.remove("dark-theme");  //удаление тт
            localStorage.setItem("darkTheme", "disabled"); //сохранение в локалст
        }
    });

    // === СМЕНА ЯЗЫКА ===
    const translations = {
        ru: {
            settings_title: "Настройки",
            dark_mode: "Тёмная тема",
            language: "Язык",
        },
        en: {
            settings_title: "Settings",
            dark_mode: "Dark Mode",
            language: "Language",
        }
    };

    function applyLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    let savedLanguage = localStorage.getItem("language") || "ru";
    languageSelect.value = savedLanguage;
    applyLanguage(savedLanguage);

    languageSelect.addEventListener("change", () => {
        let selectedLang = languageSelect.value;
        localStorage.setItem("language", selectedLang);
        applyLanguage(selectedLang);
    });
});


