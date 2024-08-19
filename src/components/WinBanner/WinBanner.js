import React from 'react';

import StatusBanner from '../StatusBanner/StatusBanner';

function WinBanner({ numGuesses }) {
  return (
    <StatusBanner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numGuesses} guesses</strong>.
      </p>
    </StatusBanner>
  )
}

export default WinBanner;
