import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Подключаем стили

const ThankYou = () => {
    const [uuid, setUuid] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUuid = localStorage.getItem("uuid");
        if (storedUuid) {
            setUuid(storedUuid);
        } else {
            navigate("/"); // Если uuid нет, отправляем пользователя на главную
        }
    }, [navigate]);

    return (
        <div className="form-container">
            <h2>Спасибо за заказ!</h2>
            <p>Ваш заказ успешно оформлен.</p>
            {uuid && (
                <div className="order-id">
                    <strong>Номер заказа:</strong> <span>{uuid}</span>
                </div>
            )}
        </div>
    );
};

export default ThankYou;
