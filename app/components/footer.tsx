import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  const heartSymbolStyle: React.CSSProperties = {
    color: 'red',
    marginRight: '4px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024</p>
      <p>
        Made with <span style={heartSymbolStyle}>&hearts;</span> by Olivia Coffineau
      </p>
    </footer>
  );
};

export default Footer;
