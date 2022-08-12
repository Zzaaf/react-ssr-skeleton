import express from 'express';
import config from './config/serverConfig';
import { sequelize } from './db/models';
import mainRouter from './routes/render/mainRoute';

// инициализация приложения 'app'
const app = express();

// условное формирование порта
const port = process.env.PORT ?? 3000;

// конфигурация приложения
config(app);

// маршрутизация приложения
app.use('/', mainRouter);

// проверка работы ДБ
sequelize.authenticate();

// прослушивание порта приложения
app.listen(port, () => {
  console.log(`*** Server started at ${port} port ***`);
});