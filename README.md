🛒 Оформление заказа (React + Node.js)
📌 Полноценное приложение с фронтендом (React) и бэкендом (Node.js), которое отправляет заявки на API https://order.drcash.sh/v1/order.

📌 Функциональность
✔ Отправка заявки (Имя + Телефон)
✔ Проверка на повторные заявки
✔ Backend получает данные и отправляет их в API
✔ UI-форма с анимацией и красивым дизайном
✔ uuid заказа отображается на странице "Спасибо"

📂 Структура проекта
landing-order/
│── backend/                # Node.js сервер
│   ├── src/
│   │   ├── controllers/    # Логика обработки заказов
│   │   ├── services/       # Сервис отправки заявок в API
│   ├── server.js           # Основной сервер (Express)
│   ├── package.json        # Зависимости Node.js
│── front/                  # React-приложение
│   ├── src/
│   │   ├── components/     # Компоненты React
│   │   ├── pages/          # Страницы (ThankYou)
│   │   ├── services/       # API-сервис для фронта
│   │   ├── index.css       # Стили
│   │   ├── App.jsx         # Главный компонент
│   │   ├── main.jsx        # Маршрутизация (React Router)
│   ├── package.json        # Зависимости React
│── backend-packages.txt     # 📌 Список зависимостей для backend
│── frontend-packages.txt    # 📌 Список зависимостей для frontend
│── install.sh               # 📌 Автоустановка (Linux/macOS)
│── install.bat              # 📌 Автоустановка (Windows)
│── README.md                # 📌 Документация проекта


🛠 Автоматическая установка зависимостей
🔹 Установка для Linux/macOS
1️⃣ Откройте терминал и перейди в папку проекта:
    cd landing-order

2️⃣ Сделайте install.sh исполняемым и запусти установку:
chmod +x install.sh
./install.sh
✅ Все зависимости установятся автоматически!

🔹 Установка для Windows
1️⃣ Откройте папку landing-order/
2️⃣ Дважды кликните на install.bat
3️⃣ Подождите, пока установятся зависимости

✅ Теперь проект полностью настроен! 🚀

1️⃣ Запуск Backend
   node server.js
📌 Сервер запустится на http://localhost:3001

2️⃣ Запуск Frontend
   npm run dev
📌 Фронтенд доступен по http://localhost:5173


📡 API Backend
➤ POST /api/order
📌 Фронтенд отправляет данные на backend → Backend пересылает их в API drcash.sh

📌 Запрос (JSON):

{
    "name": "Иван",
    "phone": "+79123456789"
}

📌 Ответ (JSON)
✅ При успешном создании заявки:

{
    "uuid": "6eef60f0-ffce-4d10-9d61-a5f9942891ae"
}

❌ Если заявка уже отправлена:

{
    "message": "Вы уже отправили заявку!"
}

🛠 Используемые технологии
✅ Backend: Node.js, Express, node-fetch
✅ Frontend: React, React Router, CSS

📌 Разработчик
👨‍💻 Автор: [Виктор Долгий]
📧 Контакты: [E-mail: lambadarus78@gmail.com / Telegram: @PhonkRookie / GitHub: https://github.com/Ragnarok7861 /hh.ru: https://spb.hh.ru/resume/10d34d5eff0dc2c3180039ed1f4a626a784a4a]

