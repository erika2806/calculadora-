const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === "") return;

        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Erro";
    }
}

// Suporte ao teclado
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});
