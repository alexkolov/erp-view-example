import React from 'react';

export const Shift = ({ shifts, index }) => (
  <div
    className={
      `
        ${ index >= shifts ? 'disabled' : '' }
        shift
      `
    }
  >
  </div>
);