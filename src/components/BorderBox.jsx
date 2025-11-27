import React from 'react';

const BorderBox = ({ children, maxWidth }) => {
  const borderBoxStyle = {
    margin: '1em 0',
    maxWidth: maxWidth,
    border: maxWidth ? '1px solid #ccc' : 'none',
    padding: maxWidth ? '10px' : '0',
  };
  return <div style={borderBoxStyle}>{children}</div>;
};

export default BorderBox;
