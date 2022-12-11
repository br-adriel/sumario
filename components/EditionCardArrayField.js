import React from 'react';

const EditionCardArrayField = ({ title, array, defaultValue = '-' }) => {
  return (
    <p>
      <b>{`${title}: `}</b>
      {array ? array.join(', ') : defaultValue}
    </p>
  );
};

export default EditionCardArrayField;
