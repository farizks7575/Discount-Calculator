// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Discount Calculator</h1>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
};

export default Header;
