document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "6a6bba50ebb013a8bf09f3ee869f1105"; 
    const cityInput = document.getElementById("cityInput");  //поле ввода города
    const getWeatherBtn = document.getElementById("getWeatherBtn");  //кнопкуа "Получить погоду"
    const weatherResult = document.getElementById("weatherResult");  //  элемент, в который будем выводить результат.



    getWeatherBtn.addEventListener("click", () => {      //обработчик клика
        const city = cityInput.value.trim();   //получает текст из поля ввода
        if (city === "") {  // проверяет, введено ли что то
            weatherResult.innerHTML = "Введите город!";  //выводится если поле пустое
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
            .then(response => response.json())  //преобразует из json в js
            .then(data => {
                if (data.cod === 200) {
                    weatherResult.innerHTML = ` 
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>🌡 Температура: ${data.main.temp}°C</p>
                        <p>🌬 Ветер: ${data.wind.speed} м/с</p>
                        <p>☁ ${data.weather[0].description}</p>
                    `;
                } else {
                    weatherResult.innerHTML = "Город не найден!";
                }
            })
            .catch(() => weatherResult.innerHTML = "Ошибка получения данных!");
    });
});
