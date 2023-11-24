import React from 'react';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
}

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <div>
            <h2>Detalhes do Produto</h2>
            <p>ID: {product.id}</p>
            <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name}></img>
            <p>Nome: {product.name}</p>
            <p>Preço: R${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetails;
