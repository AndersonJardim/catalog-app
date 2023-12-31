import React from 'react';
import ProductList from './components/ProductList';
import products from './data/products.json';

import './styles.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
