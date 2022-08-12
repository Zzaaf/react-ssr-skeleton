import React from 'react';
import { renderToString } from 'react-dom/server';

// Вспомогательная функция для отправки HTML на основе React-компонента
function renderComponent(reactComponent, props = {}, options = { doctype: true }) {
  const reactElement = React.createElement(reactComponent, {
    ...this.app.locals, // передать app.locals
    ...this.locals, // передать res.locals
    ...props, // передать пропсы
  });
  const html = renderToString(reactElement);

  if (options.doctype) {
    this.write('<!DOCTYPE html>');
  }

  this.end(html);
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

export default ssr;
