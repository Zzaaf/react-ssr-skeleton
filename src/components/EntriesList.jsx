import React, { useEffect, useState } from 'react';
import EntryCard from './EntryCard';

function EntriesList() {
  const [entriesList, setEntriesList] = useState([]);

  useEffect(() => {
    fetch('/api/entries')
      .then((response) => response.json())
      .then((allEntries) => setEntriesList(allEntries));
  }, []);

  return (
    <div className="card card-5">

      <div className="card-heading">
        <h2 className="title">Текущие записи</h2>
      </div>

      <div className="card-body">
        <ul>
          {entriesList.length
            ? entriesList.map((entry) => <EntryCard key={entry.id} entry={entry} />)
            : <li>No entries!</li>}
        </ul>
      </div>

    </div>
  );
}

export default EntriesList;
