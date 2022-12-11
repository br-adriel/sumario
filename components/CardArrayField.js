import React from 'react';

const CardArrayField = ({ title, array, defaultValue = '-' }) => {
  return (
    <p>
      <b>{`${title}: `}</b>
      {array ? array.join(', ') : defaultValue}
    </p>
  );
};

export default CardArrayField;
