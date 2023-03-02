import React from 'react';
import Calculator from '../components/Calculator';
import './calc-page.css';

function CalcPage() {
  return (
    <div className="page-content">
      <h2 className="headline">
        <span>Let</span>
        <span>&apos;</span>
        <span>s do some math!</span>
      </h2>
      <Calculator />
    </div>
  );
}

export default CalcPage;
