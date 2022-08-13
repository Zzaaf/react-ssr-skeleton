import React, { useEffect, useState } from 'react';
import EntryCard from './EntryCard';

function EntryesList() {
  const [entryesList, setEntryesList] = useState([]);

  useEffect(() => {
    fetch('/api/entryes')
      .then((response) => response.json())
      .then((allEntryes) => setEntryesList(allEntryes));
  }, []);

  return (
    <div className="card card-5">

      <div className="card-heading">
        <h2 className="title">Текущие записи</h2>
      </div>

      <div className="card-body">
        <ul>
          {entryesList.length
            ? entryesList.map((entry) => <EntryCard key={entry.id} entry={entry} />)
            : <li>No entryes!</li>}
        </ul>
      </div>

    </div>
  );
}

export default EntryesList;
