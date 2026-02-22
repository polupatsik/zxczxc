const express = require("express");
const cors = require("cors");
const { nanoid } = require("nanoid");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let products = [
  { id: nanoid(6), name: "iPhone 15", category: "Смартфоны", description: "Новый смартфон Apple", price: 120000, stock: 5 },
  { id: nanoid(6), name: "Samsung S24", category: "Смартфоны", description: "Флагман Samsung", price: 95000, stock: 7 },
  { id: nanoid(6), name: "MacBook Air", category: "Ноутбуки", description: "Лёгкий и мощный", price: 150000, stock: 3 },
  { id: nanoid(6), name: "Asus ROG", category: "Ноутбуки", description: "Игровой ноутбук", price: 180000, stock: 2 },
  { id: nanoid(6), name: "AirPods Pro", category: "Аксессуары", description: "Беспроводные наушники", price: 25000, stock: 10 },
  { id: nanoid(6), name: "Sony WH-1000XM5", category: "Аксессуары", description: "Шумоподавление", price: 30000, stock: 4 },
  { id: nanoid(6), name: "iPad Pro", category: "Планшеты", description: "Мощный планшет", price: 110000, stock: 6 },
  { id: nanoid(6), name: "Galaxy Tab", category: "Планшеты", description: "Android планшет", price: 80000, stock: 5 },
  { id: nanoid(6), name: "PlayStation 5", category: "Консоли", description: "Игровая приставка", price: 70000, stock: 8 },
  { id: nanoid(6), name: "Xbox Series X", category: "Консоли", description: "Консоль Microsoft", price: 68000, stock: 9 }
];

// GET все товары
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET товар по id
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

// POST создать товар
app.post("/api/products", (req, res) => {
  const newProduct = { id: nanoid(6), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PATCH обновить
app.patch("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });

  Object.assign(product, req.body);
  res.json(product);
});

// DELETE удалить
app.delete("/api/products/:id", (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});