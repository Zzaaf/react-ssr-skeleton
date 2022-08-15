import React, { useState } from 'react';

export default function Form() {
  const [registartion, setRegistration] = useState(false);

  const fetchHandler = (event) => {
    event.preventDefault();

    const { method, action } = event.target;

    fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    })
      .then((response) => response.json())
      .then((data) => setRegistration(data.status));
  };

  return (
    <form method="post" action="/api/entries" onSubmit={fetchHandler}>
      <div className="form-row m-b-55">
        <div className="name">Как тебя зовут</div>
        <div className="value">
          <div className="row row-space">
            <div className="col-2">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="firstName" placeholder="Имя" required />
              </div>
            </div>
            <div className="col-2">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="lastName" placeholder="Фамилия" required />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="name">Любимая настолка</div>
        <div className="value">
          <div className="input-group">
            <input className="input--style-5" type="text" name="game" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="name">Email</div>
        <div className="value">
          <div className="input-group">
            <input className="input--style-5" type="email" name="email" required />
          </div>
        </div>
      </div>
      <div className="form-row m-b-55">
        <div className="name">Телефон</div>
        <div className="value">
          <div className="row row-refine">
            <div className="col-3">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="areaCode" placeholder="Код" required />
              </div>
            </div>
            <div className="col-9">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="phoneNumber" placeholder="Номер" required />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="name">Фаза</div>
        <div className="value">
          <div className="input-group">
            <div className="rs-select2 js-select-simple select--no-search">
              <select name="phase">
                <option value="1">Фаза 1</option>
                <option value="2">Фаза 2</option>
                <option value="3">Фаза 3</option>
              </select>
              <div className="select-dropdown" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-row p-t-20">
        <label className="label label--block">Был раньше на Elbrus Party?</label>
        <div className="p-t-15">
          <label className="radio-container m-r-55">
            Да, был
            <input type="radio" defaultChecked="checked" name="firstTime" value={false} />
            <span className="checkmark" />
          </label>
          <label className="radio-container">
            Нет, впервые
            <input type="radio" name="firstTime" value />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div>
        {registartion
          ? <h4>Вы успешно зарегистрировались</h4>
          : <button className="btn btn--radius-2 btn--red" type="submit">Зарегистрироваться</button>}
      </div>
    </form>
  );
}
