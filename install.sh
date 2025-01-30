#!/bin/bash

echo "🚀 Начинаем установку зависимостей из .txt файлов..."

# Установка зависимостей Backend
echo "📦 Устанавливаем backend..."
cd backend
xargs npm install < ../backend-packages.txt

# Установка зависимостей Frontend
echo "📦 Устанавливаем frontend..."
cd ../front
xargs npm install < ../frontend-packages.txt

echo "✅ Все зависимости установлены!"
echo "📌 Для запуска backend: cd backend && node server.js"
echo "📌 Для запуска frontend: cd front && npm run dev"
