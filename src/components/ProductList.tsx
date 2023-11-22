// ProductList.tsx
import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} onClick={() => handleProductClick(product)}>
                        {product.name} - R${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>

            {selectedProduct && <ProductDetails product={selectedProduct} />}
        </div>
    );
};

export default ProductList;
