import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <link rel="icon" href="/img/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/img/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/img/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/img/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/img/icon-256x256.png" />
        {/* скрипт наполнения вспомогательнго объекта initState для работы гидратации */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />

        {/* скрипты собранные через Webpack */}
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />

        {/* CSS стили для приложения */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="all" />
        <link href="/css/main.css" rel="stylesheet" media="all" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">
          {/* компонент обёртка StaticRouter для передачи маршрута клиентским роутерам */}
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
