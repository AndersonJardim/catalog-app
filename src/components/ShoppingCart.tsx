// ShoppingCart.tsx
import React from 'react';

interface ShoppingCartProps {
    cartItems: number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <p>Itens no Carrinho: {cartItems}</p>
        </div>
    );
};

export default ShoppingCart;
