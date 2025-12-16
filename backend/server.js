const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

let users = [];
let services = [
  {
    service_id: 1,
    service_name: "Установка розетки",
    description: "Электромонтажные работы",
    category: "Электрика"
  }
];

// рега
app.post("/api/register", (req, res) => {
  const user = req.body;
  user.role = "user";
  users.push(user);
  res.json({ message: "Пользователь зарегистрирован" });
});

// логинчик
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Неверные данные" });
  }

  res.cookie("role", user.role);
  res.json({ message: "Вход выполнен" });
});

// получка услуг
app.get("/api/services", (req, res) => {
  res.json(services);
});

// доб услуг (адм)
app.post("/api/services", (req, res) => {
  const service = req.body;
  services.push(service);
  res.json({ message: "Услуга добавлена" });
});

app.listen(3001, () => {
  console.log("Backend запущен на порту 3001");
});
