// ProductList.tsx
import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - R${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
