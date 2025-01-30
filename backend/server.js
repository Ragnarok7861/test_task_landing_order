import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import OrderController from "./src/controllers/OrderController.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());

// Проверочный GET-запрос
app.get("/", (req, res) => {
    res.send("Backend работает! Используйте /api/order для отправки заявок.");
});

// API для оформления заказа
app.post("/api/order", OrderController.createOrder);

app.listen(PORT, () => {
    console.log(`Backend запущен на http://localhost:${PORT}`);
});
