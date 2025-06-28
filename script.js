const API_BASE = "https://insects-knowledge-catalyst-manually.trycloudflare.com";

async function getBalance() {
    try {
        const response = await fetch(`${API_BASE}/api/balance`);
        if (!response.ok) throw new Error("Ошибка сети");
        const data = await response.json();
        document.getElementById("balance").innerText = `${data.balance} ₽`;
    } catch (error) {
        console.error("Ошибка при получении баланса:", error);
        document.getElementById("balance").innerText = "Ошибка загрузки";
    }
}

async function sendIncome(amount) {
    try {
        const response = await fetch(`${API_BASE}/api/income`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({amount: Number(amount)})
        });
        if (!response.ok) throw new Error("Ошибка сети");
        await getBalance();
    } catch (error) {
        console.error("Ошибка при отправке прихода:", error);
    }
}

async function sendExpense(category, amount) {
    try {
        const response = await fetch(`${API_BASE}/api/expense`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({category, amount: Number(amount)})
        });
        if (!response.ok) throw new Error("Ошибка сети");
        await getBalance();
    } catch (error) {
        console.error("Ошибка при отправке расхода:", error);
    }
}

// Пример функций вызова для кнопок (тебе их надо связать с элементами на странице)

document.getElementById("refreshBalanceBtn").addEventListener("click", getBalance);

// Другие элементы и логика для отправки дохода и расхода, категорий и т.д.
// Например, при выборе категории и суммы вызывай sendExpense(category, amount)

window.onload = () => {
    getBalance();
};
