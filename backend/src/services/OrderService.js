import fetch from "node-fetch";

class OrderService {
    static async sendOrder(name, phone) {
        if (!name || !phone) {
            throw new Error("Заполните все поля!");
        }

        const requestData = {
            stream_code: "vv4uf",
            client: { name, phone },
        };

        const response = await fetch("https://order.drcash.sh/v1/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer RLPUUOQAMIKSAB2PSGUECA",
            },
            body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Ошибка при отправке заявки");
        }

        return data;
    }
}

export default OrderService;
