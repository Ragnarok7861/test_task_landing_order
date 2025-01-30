class OrderService {
    static async sendOrder(name, phone) {
        const response = await fetch("http://localhost:3001/api/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Ошибка отправки заявки");
        }

        return data;
    }
}

export default OrderService;
