import express from 'express';
import config from './config/serverConfig';
import { sequelize } from './db/models';

// подключение роутеров
import apiEntryes from './routes/api/apiEntryes';
import mainRouter from './routes/render/mainRoute';
import entryesRouter from './routes/render/entryesRoute';

// инициализация приложения 'app'
const app = express();

// условное формирование порта
const port = process.env.PORT ?? 3000;

// конфигурация приложения
config(app);

// маршрутизация приложения
app.use('/', mainRouter);
app.use('/api/entryes', apiEntryes);
app.use('/entryes', entryesRouter);

// проверка работы ДБ
sequelize.authenticate();

// прослушивание порта приложения
app.listen(port, () => {
  console.log(`*** Server started at ${port} port ***`);
});
