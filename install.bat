@echo off
echo 🚀 Начинаем установку зависимостей из .txt файлов...

:: Установка backend
echo 📦 Устанавливаем backend...
cd backend
for /F %%i in (..\backend-packages.txt) do npm install %%i

:: Установка frontend
echo 📦 Устанавливаем frontend...
cd ../front
for /F %%i in (..\frontend-packages.txt) do npm install %%i

echo ✅ Все зависимости установлены!
echo 📌 Для запуска backend: cd backend && node server.js
echo 📌 Для запуска frontend: cd front && npm run dev
pause
