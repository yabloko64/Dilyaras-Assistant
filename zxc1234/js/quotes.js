document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const newQuoteBtn = document.getElementById("newQuoteBtn");

    async function getQuote() {     //асинхронная функция getQuote(), которая будет запрашивать цитату с API.
        try {
            let response = await fetch("https://api.api-ninjas.com/v1/quotes", {    //отправляет GET-запрос на API
                method: "GET",
                headers: { "X-Api-Key": "iewHdt4Ft9HDMDs9KB5Zcg==u7fF3HO8sAvQ4Qrk" } 
            });

            if (!response.ok) throw new Error("Ошибка загрузки цитаты");    
            let data = await response.json();

            let quoteEn = data[0].quote;    //получает текст цитаты
            let authorEn = data[0].author;  //получает имя автора

            // Переводим текст цитаты
            let quoteRu = await translateText(quoteEn);
            let authorRu = await translateText(authorEn);

            // отображение на странице
            quoteText.textContent = `"${quoteRu}"`;
            quoteAuthor.textContent = `— ${authorRu}`;
        } catch (error) {
            quoteText.textContent = "Ошибка загрузки цитаты!";
            quoteAuthor.textContent = "";
        }
    }

    //асинхронная функция переводит текст с помощью Google Translate API.
    async function translateText(text) {
        let response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${encodeURIComponent(text)}`);
        let data = await response.json();
        return data[0][0][0]; // Получаем переведённый текст
    }

    newQuoteBtn.addEventListener("click", getQuote);

    getQuote(); // Загружаем первую цитату при открытии страницы
});
