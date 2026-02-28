# Контрольная работа №1
Дисциплина: Фронтенд и бэкенд разработка  
Студент: [Дружков Михаил Михайлович]  
Группа: [ЭФБО 07 24]

## Описание проекта

В рамках практических занятий 1–5 был разработан fullstack-проект,
включающий frontend на React и backend на Express.

Backend реализует REST API с CRUD-операциями для управления товарами.
В практической работе №5 была добавлена автоматическая документация API
с использованием Swagger (OpenAPI).

---

## Реализованный функционал

### Backend (Node.js + Express)

- Получение списка товаров (GET /api/products)
- Получение товара по ID (GET /api/products/:id)
- Создание товара (POST /api/products)
- Обновление товара (PATCH /api/products/:id)
- Удаление товара (DELETE /api/products/:id)
- Swagger-документация по адресу /api-docs

### Frontend (React)

- Отображение списка товаров
- Добавление нового товара
- Редактирование товара
- Удаление товара
- Взаимодействие с backend через Axios

---

## Используемые технологии

- Node.js
- Express
- Swagger (swagger-jsdoc, swagger-ui-express)
- React
- Axios
- nanoid