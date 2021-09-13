/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './ModalFilter.css';

const ModalFilter = ({
  modalFilter, sortByTitle, sortByDate, onGenreModalOpen, onDateButton,
}) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  useEffect(() => {
    onDateButton(value1, value2);
  }, [value1, value2]);

  return (
    <div className={`modalFilter ${modalFilter && 'modalFilter__open'}`}>
      <div className="modalFilter__sortdiv">
        <h1>SORT BY</h1>
        <ul>
          <li><button onClick={sortByTitle}>TITLE</button></li>
          <li className="modalFilter__ascDesc">
            <button>RELEASE DATE</button>
            <button onClick={() => sortByDate('asc')}>ASC</button>
            <button onClick={() => sortByDate('desc')}>DESC</button>
          </li>
        </ul>
      </div>

      <div className="modalFilter__filterdiv">
        <h1>FILTER BY</h1>
        <ul>
          <li><button onClick={onGenreModalOpen}>GENRE</button></li>
          <li className="modalFilter__dateFilter">
            <button>RELEASE DATE</button>

            <div className="modalFilter__fromTo">
              <small>from-to</small>
              <input value={value1} onChange={(e) => setValue1(e.target.value)} type="date" />
              <input value={value2} onChange={(e) => setValue2(e.target.value)} type="date" />
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ModalFilter;
