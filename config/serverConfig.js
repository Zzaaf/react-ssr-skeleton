import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ssr from '../middleware/ssr';

// главная конфигурация приложения
const config = (app) => {
  // использование middleware
  app.use(express.static('public'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan('dev'));
  app.use(ssr);
};

export default config;
