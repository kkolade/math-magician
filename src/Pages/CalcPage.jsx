import React from 'react';
import Calculator from '../components/Calculator';

function CalcPage() {
  return (
    <div>
      <h2 className="headline">
        let
        <span>&apos;</span>s do some math!
      </h2>
      <Calculator />
    </div>
  );
}

export default CalcPage;
