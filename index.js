function loadData(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    console.log("Данные загружены:", data);
                    alert("Данные загружены, смотрите в консоли!");
                }
                catch (error) {
                    console.error("Ошибка парсинга JSON:", error);
                }
            }
            else {
                console.error("Ошибка загрузки данных: ", xhr.status);
            }
        }
    };
    xhr.send();
}
document.addEventListener("DOMContentLoaded", function () {
    loadData("data.json");
    setTimeout(function () {
        loadData("wrong.json");
    }, 3000);
});
