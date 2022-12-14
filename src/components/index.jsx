import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// определение контейнера где будет монтироваться React приложение
const container = document.getElementById('root');

// применение гидратации в указанный контейнер + обёртка компонентом BrowserRouter для клиентского роутинга
ReactDOMClient.hydrateRoot(
  container,
  <BrowserRouter>
    <App {...window.initState} />
  </BrowserRouter>,
);
