import React, { useState } from 'react';

import './Progress.css';

const Progress = ({ style }) => <div style={style} className="ProgressBar_progress" />;

function CSSProgressBar() {
  const [currentPercent, setCurrentPercent] = useState(null);

  return <div>
    <span>Using CSS</span>
    <div className="ProgressBar">
      <Progress style={{ width: `${Number(currentPercent)}%`, transition: currentPercent !== 0 ? '1s linear width' : undefined }} />
    </div>
    <button disable={`${currentPercent !== 0}`} onClick={() => { setCurrentPercent(currentPercent === null || currentPercent === 0 ? 100 : 0) }}>{currentPercent === null ? 'Start' : 'Reset'}</button>
  </div> 
}

export default CSSProgressBar;