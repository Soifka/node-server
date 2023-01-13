const express = require('express');
const app = express();
const { validateUser } = require('./middlewares/index');
const UserController = require('./controllers/UserController');

const PORT = 3000;

const bodyParser = express.json(); // это middleware

app.post('/user', bodyParser, validateUser, UserController.createUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

/*
Задача: зарегистрировать юзера

1. Принять запрос на определенный роут (endpoint);
2. Распарсить данные, которые пришли с запросом;
3. Проверить (валидировать) данные;
4. Сохранить эти данные;
5. Создать сессию юзера;
6. Подготовить данные юзера в ответ;
7. Отправить подготовленные данные в ответ на запрос;

*/