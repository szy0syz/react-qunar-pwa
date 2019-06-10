import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import URI from 'urijs';

import './List.css'

const ListItem = memo(function List(props) {
  const {
    dTime,
    aTime,
    dStation,
    aStation,
    trainNumber,
    date,
    time,
    priceMsg,
    dayAfter
  } = props;

  const url = useMemo(() => {
    return new URI('ticket.html')
      .setSearch('aStation', aStation)
      .setSearch('dStation', dStation)
      .setSearch('trainNumber', trainNumber)
      .setSearch('date', date)
      .toString();
  }, [aStation, dStation, trainNumber, date]);

  return (
    <li className="list-item">
      <a href={url}>
        <span className="item-time">
          <em>{dTime}</em>
          <br />
          <em>{aTime} <i className="time-after">{dayAfter}</i></em>
        </span>
        <span className="item-stations">
          <em className="em-ligth">
            <i className="train-station train-start">始</i>
            {dStation}
          </em>
          <br />
          <em className="em-ligth">
            <i className="train-station train-end">终</i>
            {aStation}
          </em>
        </span>
        <span className="item-train">
          <em>{trainNumber}</em>
          <br />
          <em>{time}</em>
        </span>
        <span className="item-ticket">
          <em>{priceMsg}</em>
          <br />
          <em className="em-ligth-orange">可抢票</em>
        </span>
      </a>
    </li>
  )
})

// 列表容器
const List = memo(function (props) {
  const { list } = props

  return (
    <ul className="list">
      {list.map(item => (
        <ListItem {...item} key={item.trainNumber} />
      ))}
    </ul>
  )
});

ListItem.propTypes = {
  dTime: PropTypes.string.isRequired,
  aTime: PropTypes.string.isRequired,
  dStation: PropTypes.string.isRequired,
  aStation: PropTypes.string.isRequired,
  trainNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  priceMsg: PropTypes.string.isRequired,
  dayAfter: PropTypes.string.isRequired
}

export default List;
