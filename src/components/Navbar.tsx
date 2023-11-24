import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <h1>Logo</h1>
            <div>
                <a href="#" style={{ color: 'white' }}>
                    Home
                </a>
                <a href="#" style={{ color: 'white' }}>
                    Produtos
                </a>
                <a href="#" style={{ color: 'white' }}>
                    Carrinho
                </a>
            </div>
        </div>
    );
};

export default Navbar;
