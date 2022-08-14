// подключение React + базовые хуки
import React, { useEffect, useState } from 'react';

// подключение компонента и хука из пакета react-router-dom
import { Link, useParams } from 'react-router-dom';

function CurrentEntry() {
  // использование хука useState() для формирования состояние списка записей, по умолчинию список пуст
  const [currentEntry, setCurrentEntry] = useState(null);

  // использование хука useParams() для определения параметризированоого маршрута на клиентской стороне
  const { id } = useParams();
  // использование хука useEffect() для выполнения сайд-эффекта после монтирования компонента (работает асинхронно)
  useEffect(() => {
    fetch(`/api/entries/${id}`)
      .then((response) => response.json())
      .then((allEntries) => setCurrentEntry(allEntries));
  }, []);

  return (
    <div className="card card-5">

      {
          currentEntry
            ? (
              <>
                <div className="card-heading">
                  <h2 className="title">{currentEntry.firstName} {currentEntry.lastName}</h2>
                </div>

                <div className="card-body">
                  <div className="card">
                    <h5 className="card-header"> ID: #{currentEntry.id}</h5>
                    <div className="card-body">
                      <h5 className="card-title">Данные участника: {currentEntry.firstName} {currentEntry.lastName}</h5>
                      <p className="card-text">Дата регистрации: {currentEntry.createdAt.slice(0, 10)}</p>
                      <p className="card-text">Email: {currentEntry.email}</p>
                      <p className="card-text">Телефон: {currentEntry.areaCode}-{currentEntry.phoneNumber}</p>
                      <p className="card-text">Фаза: {currentEntry.phase}</p>
                      <p className="card-text">Любимая настольная игра: {currentEntry.game}</p>
                      <Link to="/entries" className="btn btn-primary mt-5">Назад</Link>
                    </div>
                  </div>
                </div>
              </>
            )
            : <div>No data!</div>
        }
    </div>
  );
}

export default CurrentEntry;
