import express from 'express';
import config from './config/serverConfig';
import { sequelize } from './db/models';

// подключение роутеров
import apiEntries from './routes/api/apiEntries';
import mainRouter from './routes/render/mainRoute';
import entriesRouter from './routes/render/entriesRoute';

// инициализация приложения 'app'
const app = express();

// условное формирование порта
const port = process.env.PORT ?? 3000;

// конфигурация приложения
config(app);

// маршрутизация приложения
app.use('/', mainRouter);
app.use('/api/entries', apiEntries);
app.use('/entries', entriesRouter);

// проверка работы ДБ
sequelize.authenticate();

// прослушивание порта приложения
app.listen(port, () => {
  console.log(`*** Server started at ${port} port ***`);
});
