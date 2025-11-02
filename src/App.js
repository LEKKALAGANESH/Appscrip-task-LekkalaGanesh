import axios from 'axios';
import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);

  const toggleFilter = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <div>
      <Header />
      <div className='main-heading'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>

      <nav className="utility-bar">
        <div className="utility-left">
          <span className="item-count">3425 ITEMS</span>
          <button onClick={toggleFilter} className="filter-toggle-btn">
            <span className={`filter-toggle-arrow ${isFilterVisible ? 'open' : ''}`}>&lt;</span>
            {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <div className="utility-right">
          <select className="sort-dropdown">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST</option>
            <option value="popular">POPULAR</option>
            <option value="price-low-high">PRICE: LOW TO HIGH</option>
            <option value="price-high-low">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </nav>

      <main className="main-content">
        {isFilterVisible && <Filters />}

        <div className="product-grid-container">
          {error && <p className="error-message">Error: {error}</p>}
          {loading && <p className="loading-message">Loading...</p>}
          {!loading && <section className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;