import React from 'react';
import PropTypes from 'prop-types';
import calssnames from 'classnames';

import './HighSpeed.css';

export default function HighSpeed(props) {
  const {
    highSpeed,
    toggle,
  } = props;
  return (
    <div className="high-speed">
      <div className="high-speed-label">只看高铁/动车</div>
      <div className="high-speed-switch" onClick={() => toggle()}>
        <input type="hidden" name="highSpeed" value={highSpeed} />
        <div className={calssnames('high-speed-track', {
          checked: highSpeed,
        })}>
          <span className={calssnames('high-speed-handle', {
            checked: highSpeed,
          })}></span>
        </div>
      </div>
    </div>
  );
}

HighSpeed.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}