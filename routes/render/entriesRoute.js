// подключение роутера для формирования обработчиков
import { Router } from 'express';

// подключение React для использования его методов
import React from 'react';

// подключение метода renderToString для формирования HTML кода
import { renderToString } from 'react-dom/server';

// подключение компонента обёртки
import Layout from '../../src/components/Layout';

const router = Router();

router.get('/', (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/:id', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default router;
