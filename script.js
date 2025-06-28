const API_BASE = "https://insects-knowledge-catalyst-manually.trycloudflare.com";

async function getBalance() {
    try {
        const response = await fetch(`${API_BASE}/api/balance`);
        if (!response.ok) throw new Error("Ошибка сети");
        const data = await response.json();
        document.getElementById("balance").innerText = `${data.balance.toFixed(2)} ₽`;
    } catch (error) {
        console.error("Ошибка при получении баланса:", error);
        document.getElementById("balance").innerText = "Ошибка загрузки";
    }
}

async function sendIncome(amount) {
    try {
        const response = await fetch(`${API_BASE}/api/transaction`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({type: "income", amount: Number(amount), category: null})
        });
        if (!response.ok) throw new Error("Ошибка сети");
        await getBalance();
    } catch (error) {
        console.error("Ошибка при отправке прихода:", error);
    }
}

async function sendExpense(category, amount) {
    try {
        const response = await fetch(`${API_BASE}/api/transaction`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({type: "expense", amount: Number(amount), category})
        });
        if (!response.ok) throw new Error("Ошибка сети");
        await getBalance();
    } catch (error) {
        console.error("Ошибка при отправке расхода:", error);
    }
}

// Привязка кнопок и логика на примере, чтобы интегрировать в твой HTML:
document.getElementById("incomeBtn").onclick = () => {
    const amount = parseFloat(prompt("Введите сумму прихода:"));
    if (!isNaN(amount) && amount > 0) {
        sendIncome(amount);
    } else alert("Введите корректную сумму");
};

document.getElementById("expenseBtn").onclick = () => {
    const category = prompt("Введите категорию расхода:");
    const amount = parseFloat(prompt("Введите сумму расхода:"));
    if (category && !isNaN(amount) && amount > 0) {
        sendExpense(category, amount);
    } else alert("Введите корректные данные");
};

window.onload = () => {
    getBalance();
};
