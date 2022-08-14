import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Registration from './Registration';
import EntriesList from './EntriesList';
import CurrentEntry from './CurrentEntry';

export default function App() {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        {/* навигация прложения, рендерится при любом маршруте */}
        <Nav />

        {/* компонент обёртка Routes хранит в себе список клиентских обработчиков
        привязанных к конткретным компонентам  */}
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/entries" element={<EntriesList />} />
          <Route path="/entries/:id" element={<CurrentEntry />} />
        </Routes>
      </div>
    </div>
  );
}
