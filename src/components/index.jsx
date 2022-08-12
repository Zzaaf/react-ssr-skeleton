import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
ReactDOMClient.hydrateRoot(container, <App {...window.initState} />);
