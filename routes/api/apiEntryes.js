// подключение роутера для формирования обработчиков
import { Router } from 'express';

// подключение модели из БД
import { Entry } from '../../db/models';

const router = Router();

// обработчики с привязкой маршрута через метод route()
router.route('/')
  .get((req, res) => {
    Entry.findAll({ raw: true })
      .then((allEntryes) => res.json(allEntryes))
      .catch((error) => res.status(500).json({ message: error.message }));
  })
  .post((req, res) => {
    Entry.create(req.body)
      .then(() => res.status(201).json({ status: true }))
      .catch((error) => res.status(500).json({ message: error.message }));
  });

export default router;
