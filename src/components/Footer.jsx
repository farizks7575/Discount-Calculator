// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
};

export default Footer;
