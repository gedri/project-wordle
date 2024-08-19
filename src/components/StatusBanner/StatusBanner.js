import React from 'react';

function StatusBanner({status, children }) {
  return <div className={`${status} banner`}>{children}</div>
}

export default StatusBanner;
