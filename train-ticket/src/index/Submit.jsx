
import React, { memo }  from 'react';
import './Submit.css';

// 该组件没有输入任何props 则可以使用 memo 优化
export default memo(function Submit() {
  return (
  <div className="submit">
    <button type="submit" className="submit-button"> 搜索 </button>
  </div>
  );
});