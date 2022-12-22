import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>

      {total >= 1 && <p>Total: {total}</p>}
      {positiveFeedback > 0 && <p>Positive feedback: {positiveFeedback}%</p>}
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
