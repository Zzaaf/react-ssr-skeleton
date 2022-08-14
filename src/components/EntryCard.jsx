import React from 'react';
import { Link } from 'react-router-dom';

function EntryCard({ entry }) {
  return (
    <li className="mt-5">
      <div className="card">
        <h5 className="card-header">ID: #{entry.id}</h5>
        <div className="card-body">
          <h5 className="card-title">Данные участника: {entry.firstName} {entry.lastName}</h5>
          <p className="card-text">Дата регистрации: {entry.createdAt.slice(0, 10)}</p>
          <Link to={`/entries/${entry.id}`} className="btn btn-primary mt-5">Подробнее</Link>
        </div>
      </div>
    </li>
  );
}

export default EntryCard;
