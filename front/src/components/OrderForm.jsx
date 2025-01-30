import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderService from "../services/OrderService";
import "../index.css"; // Подключаем стили

const OrderForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !phone) {
            setError("Заполните все поля!");
            return;
        }

        if (localStorage.getItem(phone)) {
            setError("Вы уже отправили заявку!");
            return;
        }

        try {
            const response = await OrderService.sendOrder(name, phone);
            localStorage.setItem("uuid", response.uuid); // Сохраняем ID заказа
            navigate("/thank-you"); // Переход на страницу "Спасибо"
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="form-container">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Ваш телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <button type="submit">Оформить заказ</button>
            </form>
        </div>
    );
};

export default OrderForm;
