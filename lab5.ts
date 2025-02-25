document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загрузилась");
    const data: number[] = [12, 23, 34, 45];

    function removeOddNumbers() {
        let index = 0;

        const removeNextOdd = () => {
            if (index < data.length) {
                if (data[index] % 2 !== 0) {
                    console.log(`Удалено число: ${data[index]}`);
                    data.splice(index, 1);
                    setTimeout(removeNextOdd, 1000);
                } else {
                    index++;
                    setTimeout(removeNextOdd, 1000);
                }
            }
        };

        removeNextOdd();
    }

    removeOddNumbers();

    function createLogger(message: string): () => void {
        const Message = `Сообщение: ${message}`;
        return () => {
            console.log(Message);
        };
    }
    
    const greet = createLogger("Замыкание");
    greet();
});
