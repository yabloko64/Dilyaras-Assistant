document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "89983999c1498801516a7f3e"; 
    const amountInput = document.getElementById("amountInput");
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const convertBtn = document.getElementById("convertBtn");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.innerHTML = "Введите корректную сумму!";
            return;
        }

        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    const rate = data.conversion_rates[to];
                    const convertedAmount = (amount * rate).toFixed(2);
                    resultDiv.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
                } else {
                    resultDiv.innerHTML = "Ошибка конверсии!";
                }
            })
            .catch(() => resultDiv.innerHTML = "Ошибка загрузки данных!");
    });
});
