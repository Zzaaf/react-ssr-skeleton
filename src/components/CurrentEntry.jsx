// подключение React + базовые хуки
import React, { useEffect, useState } from 'react';

// подключение компонента и хука из пакета react-router-dom
import { Link, useParams } from 'react-router-dom';

function CurrentEntry() {
  // использование хука useState() для формирования состояние списка записей, по умолчинию список пуст
  const [entryesList, setEntryesList] = useState([]);

  // использование хука useEffect() для выполнения сайд-эффекта после монтирования компонента (работает асинхронно)
  useEffect(() => {
    fetch('/api/entryes')
      .then((response) => response.json())
      .then((allEntryes) => setEntryesList(allEntryes));
  }, []);

  // использование хука useParams() для определения параметризированоого маршрута на клиентской стороне
  const { id } = useParams();
  let currentEntry = {};

  if (entryesList.length) {
    currentEntry = entryesList.find((entry) => entry.id === Number(id));
  }

  return (
    <div className="card card-5">

      <div className="card-heading">
        <h2 className="title">{currentEntry.firstName} {currentEntry.lastName}</h2>
      </div>

      <div className="card-body">
        {
          currentEntry.id
            ? (
              <div className="card">
                <h5 className="card-header"> ID: #{currentEntry.id}</h5>
                <div className="card-body">
                  <h5 className="card-title">Данные участника: {currentEntry.firstName} {currentEntry.lastName}</h5>
                  <p className="card-text">Дата регистрации: {currentEntry.createdAt.slice(0, 10)}</p>
                  <p className="card-text">Email: {currentEntry.email}</p>
                  <p className="card-text">Телефон: {currentEntry.areaCode}-{currentEntry.phoneNumber}</p>
                  <p className="card-text">Фаза: {currentEntry.phase}</p>
                  <p className="card-text">Любимая настольная игра: {currentEntry.game}</p>
                  <Link to="/entryes" className="btn btn-primary mt-5">Назад</Link>
                </div>
              </div>
            )
            : <div>No data!</div>
        }
      </div>
    </div>
  );
}

export default CurrentEntry;
