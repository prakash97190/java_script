
    let count = 0;
    const counter = document.getElementById("counter");

    function increase() {
        count++;
    counter.textContent = count;
    }

    function decrease() {
        count--;
    counter.textContent = count;
    }

    function resetCounter() {
        count = 0;
    counter.textContent = count;
    }
    