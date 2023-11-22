// ProductList.tsx
import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<number>(0);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        setCategoryFilter(selectedCategory === 'all' ? null : selectedCategory);
    };

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !categoryFilter || product.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Lista de Produtos</h2>

            <div>
                <label htmlFor="search">Pesquisar: </label>
                <input type="text" id="search" value={searchTerm} onChange={handleSearch} />
            </div>

            <div>
                <label htmlFor="category">Filtrar por Categoria: </label>
                <select id="category" value={categoryFilter || 'all'} onChange={handleCategoryChange}>
                    <option value="all">Todas</option>
                    {Array.from(new Set(products.map((product) => product.category))).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {filteredProducts.map((product) => (
                    <div key={product.id} onClick={() => handleProductClick(product)} style={{ border: '1px solid #ddd', padding: '10px', cursor: 'pointer' }}>
                        <p>{product.name}</p>
                        <p>R${product.price.toFixed(2)}</p>
                        <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>

            {selectedProduct && <ProductDetails product={selectedProduct} />}

            <ShoppingCart cartItems={cartItems} />
        </div>
    );
};

export default ProductList;
