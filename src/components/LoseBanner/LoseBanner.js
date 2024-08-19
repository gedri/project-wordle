import React from 'react';
import StatusBanner from '../StatusBanner/StatusBanner';

function LoseBanner({ answer }) {
  return (
    <StatusBanner status="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </StatusBanner>
  )
}

export default LoseBanner;
