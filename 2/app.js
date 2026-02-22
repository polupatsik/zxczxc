const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let products = [
  { id: 1, name: 'Телефон', price: 30000 },
  { id: 2, name: 'Ноутбук', price: 70000 }
];

// Главная
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Получить все товары
app.get('/products', (req, res) => {
  res.json(products);
});

// Получить товар по id
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

// Создать товар
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: Date.now(),
    name,
    price
  };
  products.push(newProduct);
  res.json(newProduct);
});

// Обновить товар
app.patch('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.send('Not found');

  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;

  res.json(product);
});

// Удалить товар
app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.send('Deleted');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});