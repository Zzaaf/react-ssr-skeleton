import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../../src/components/Layout';

const router = Router();

router.get('/', (req, res) => {
  const initState = {};
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default router;
