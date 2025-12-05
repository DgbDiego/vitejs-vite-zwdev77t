// TextBox.jsx

import React from 'react';

function TextBox({ children, maxWidth, textAlign='justify' }) {
  const textBoxStyle = {
    fontFamily: 'inherit',
    whiteSpace: 'pre-line',
    margin: '1em 0',
    maxWidth: maxWidth,
    border: maxWidth ? '1px solid #ccc' : 'none',
    padding: maxWidth ? '10px' : '0',
    textAlign: textAlign
  };

  const rawMarkup = { __html: children };

  // return <pre style={textBoxStyle}>{children}</pre>;
  // Abaixo, forma de inserir o texto e aceitar formatacao nele, como <b>Negrito</b> ou <em>italico<em>
  return <pre style={textBoxStyle} dangerouslySetInnerHTML={rawMarkup}></pre>;
}

export default TextBox;
