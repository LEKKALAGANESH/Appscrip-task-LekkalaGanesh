import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="product-card">
            <button
                className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to wishlist"
            >
                {isWishlisted ? '♥' : '♡'}
            </button>

            <div className="product-image-container">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price-message">
                    Sign in or Create an account to see pricing
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
