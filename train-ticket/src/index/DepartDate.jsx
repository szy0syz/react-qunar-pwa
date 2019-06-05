import React, { useMemo } from 'react';
import { h0 } from '../common/fp.js';
import dayjs from 'dayjs';
import './DepartDate.css';


export default function DepartDate(props) {
  const {
    time,
    onClick,
  } = props;

  const h0OfDepart = h0(time);

  const departDateString = useMemo(() => {
    return dayjs(h0OfDepart).format('YYYY-MM-DD');
  }, [h0OfDepart])

  return (
    <div className="depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString}
    </div>
  );
}