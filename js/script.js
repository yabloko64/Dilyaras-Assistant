// Проверка загрузки JS
console.log("Скрипт подключен!");

document.addEventListener("DOMContentLoaded", () => {
    // === Применяем тёмную тему ко всему сайту ===
    if (localStorage.getItem("darkTheme") === "enabled") {
        document.body.classList.add("dark-theme");
    }

    // === Применяем сохранённый язык ===
    const translations = {
        ru: {
            home: "Главная",
            todo: "Список дел",
            weather: "Погода",
            currency: "Конвертер валют",
            habits: "Трекер привычек",
            bmi: "Калькулятор ИМТ",
            quotes: "Цитаты",
            diary: "Дневник",
            settings: "Настройки",
            about: "О нас"
        },
        en: {
            home: "Home",
            todo: "To-Do List",
            weather: "Weather",
            currency: "Currency Converter",
            habits: "Habit Tracker",
            bmi: "BMI Calculator",
            quotes: "Quotes",
            diary: "Diary",
            settings: "Settings",
            about: "About Us"
        }
    };

    function applyLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {    //Ищет все элементы с атрибутом data-lang
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    let savedLanguage = localStorage.getItem("language") || "ru";   //установка сохраненного языка
    applyLanguage(savedLanguage);
});
