import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="card-heading">
      <Link to="/" className="btn">Регистрация</Link>
      <Link to="/entryes" className="btn">Список записей</Link>
    </div>
  );
}

export default Nav;
