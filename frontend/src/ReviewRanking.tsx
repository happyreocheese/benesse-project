import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head'; // Import the Head component
import './App2.css';

const ReviewRanking = () => {
  const products = [
    { id: 1, name: '仮想通貨', expert: '専門家Aさん', recommend: 5, review: 5 },
    { id: 2, name: '仮想通貨', expert: '素人Bさん', recommend: 2, review: 3 },
    { id: 3, name: '仮想通貨', expert: 'チーズさん', recommend: 3, review: 3},
    { id: 4, name: '仮想通貨', expert: '田中さん', recommend: 4, review: 2 },
    { id: 5, name: '仮想通貨', expert: '西田さん', recommend: 3, review: 3},
    { id: 6, name: '仮想通貨', expert: 'tyuさん', recommend: 4, review: 2 },
    
  ];

  return (
    <div>
      <Head /> {/* Include the Head component */}
      <div className="review-ranking">
        <h2 className="ranking-title">
          <span className="crown-icon">👑</span> レビューランキング
        </h2>
        <div className="product-list">
          {products.map((product, index) => (
            <Link to={`/review/${product.id}`} key={product.id} className="product-card">
              <h3>{index + 1} {product.name}</h3>
              <p>{product.expert}</p>
              <div>おすすめ {renderStars(product.recommend)}</div>
              <div>レビュー {renderStars(product.review)}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const renderStars = (rating: number) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};

export default ReviewRanking;