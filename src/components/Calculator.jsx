import PropTypes from 'prop-types';
import React from 'react';

function Calculator({ initialValue }) {
  return (
    <div className="calc-container">
      <input className="display" type="text" value={initialValue} />
      <button type="submit" className="calc-key">
        A/C
      </button>
      <button type="submit" className="calc-key">
        +/-
      </button>
      <button type="submit" className="calc-key">
        %
      </button>
      <button type="submit" className="operator">
        /
      </button>
      <button type="submit" className="calc-key">
        7
      </button>
      <button type="submit" className="calc-key">
        8
      </button>
      <button type="submit" className="calc-key">
        9
      </button>
      <button type="submit" className="operator">
        *
      </button>
      <button type="submit" className="calc-key">
        4
      </button>
      <button type="submit" className="calc-key">
        5
      </button>
      <button type="submit" className="calc-key">
        6
      </button>
      <button type="submit" className="operator">
        -
      </button>
      <button type="submit" className="calc-key">
        1
      </button>
      <button type="submit" className="calc-key">
        2
      </button>
      <button type="submit" className="calc-key">
        3
      </button>
      <button type="submit" className="operator">
        +
      </button>
      <button type="submit" className="zero">
        0
      </button>
      <button type="submit" className="calc-key">
        .
      </button>
      <button type="submit" className="operator">
        =
      </button>
    </div>
  );
}

Calculator.propTypes = { initialValue: PropTypes.number.isRequired };

export default Calculator;
