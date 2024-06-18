import React from 'react';

import ErrorFace from '../svgs/ErrorFace';
const ErrorUI = (props) => {
  const { message = 'Error loading data' } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: '#F2F2F2',
          borderRadius: '100px',
          width: '200px',
          height: '150px',
        }}
      >
        <ErrorFace />
      </div>
      <span className="mt-4 text-18 fw-semibold">{message}</span>
    </div>
  );
};

export default ErrorUI;
