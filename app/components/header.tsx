import React from 'react';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundImage: 'url("/images/chifoumi.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: '100%',
  };

  return (
    <header style={headerStyle}>
      <h1>Shifumi</h1>
      <h2 className="text-teal-400">Rock, Paper, Scissors</h2>
    </header>
  );
};

export default Header;
