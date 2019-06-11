import React, { useState } from 'react';
import useInterval from './useInterval';

import './Progress.css';

const Progress = ({ style }) => <div style={style} className="ProgressBar_progress" />;

function JSProgressBar() {
  const [currentPercent, setCurrentPercent] = useState(null);

  useInterval(() => {
    setCurrentPercent(currentPercent + 1);
  }, currentPercent !== null && currentPercent < 100 ? 10 : null);

  return <div>
    <span>Using Javascript</span>
    <div className="ProgressBar">
      <Progress style={{ width: `${Number(currentPercent)}%` }} />
    </div>
    <button disable={`${currentPercent !== 0}`} onClick={() => { setCurrentPercent(0) }}>{currentPercent === null ? 'Start' : 'Reset'}</button>
  </div> 
}

export default JSProgressBar;