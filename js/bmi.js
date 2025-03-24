document.addEventListener("DOMContentLoaded", () => {
    const heightInput = document.getElementById("heightInput");
    const weightInput = document.getElementById("weightInput");
    const calcBmiBtn = document.getElementById("calcBmiBtn");
    const bmiResult = document.getElementById("bmiResult");

    calcBmiBtn.addEventListener("click", () => {
        const height = parseFloat(heightInput.value) / 100; // Преобразуем см в метры
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {  //проверка корректности
            bmiResult.innerHTML = "Введите корректные значения!";
            return;
        }

        // вычисления имт
        const bmi = (weight / (height * height)).toFixed(2);
        let category = "";

        
        if (bmi < 18.5) {
            category = "Недостаточный вес";
        } else if (bmi < 24.9) {
            category = "Нормальный вес";
        } else if (bmi < 29.9) {
            category = "Избыточный вес";
        } else {
            category = "Ожирение";
        }

        bmiResult.innerHTML = `Ваш ИМТ: <strong>${bmi}</strong> (${category})`;
    });
});
