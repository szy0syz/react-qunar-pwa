import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Header from './Header.jsx';

import './DateSelector.css';

function Month(props) {
  const {
    startingTimeInMonth,
    onSelect,
  } = props;

  const startDay = new Date(startingTimeInMonth);
  const currentDay = new Date(startingTimeInMonth);

  let days = [];

  // 天数每次递增，直到月份相等则遍历，不等就完成
  while (currentDay.getMonth() === startDay.getMonth()) {
    days.push(currentDay.getTime());
    currentDay.setDate(currentDay.getDate() + 1);
  }

  days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
    .fill(null).concat(days);

  const lastDay = new Date(days[days.length - 1]);

  days = days.concat(new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null));

  const weeks = [];

  for (let row = 0; row < days.length / 7; ++row) {
    const week = days.slice(row * 7, (row + 1) * 7);
    weeks.push(week);
  }

  return (
    <table className="date-table">
      <thead>
        <tr>
          <td colSpan="7">
            <h5>
              {startDay.getFullYear()}年{startDay.getMonth() + 1}月
            </h5>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th className="weekend">周六</th>
          <th className="weekend">周日</th>
        </tr>
      </tbody>
    </table>
  )
};

Month.protoTypes = {
  startingTimeInMonth: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default function DateSelector(props) {
  const {
    show,
    onSelect,
    onBack,
  } = props;

  const now = new Date();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  now.setDate(1);  // 设置当前月的第一天

  const monthSequence = [now.getTime()];  // 当前月第一天的零时刻

  // 获取下个月的第一天的零时刻
  now.setMonth(now.getMonth() + 1);
  monthSequence.push(now.getTime());

  now.setMonth(now.getMonth() + 1);
  monthSequence.push(now.getTime());

  return (
    <div className={classnames('date-selector', { hidden: !show })}>
      <Header title="日期选择" onBack={onBack} />
      <div className="date-selector-tables">
        {
          monthSequence.map((month) => {
            return (
              <Month
                key={month}
                onSelect={onSelect}
                startingTimeInMonth={month}
              />
            )
          })
        }
      </div>
    </div>
  )
};

DateSelector.propTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
