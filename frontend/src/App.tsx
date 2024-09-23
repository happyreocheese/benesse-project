
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Screen2 from './Screen2';
import ReviewRanking from './ReviewRanking';
import ReviewDetail from './ReviewDetail';
import Head from './Head';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    navigate(`/screen2?term=${searchTerm}`); // 検索語をクエリパラメータとして渡す

  };

  return (
    <div>
      <Head />
      <main>
        <div className="search-section">
          <h2><span className="search-icon">🔍</span> 金融商品を探す</h2>
          <div className="search-bar">
            <input
              type="search"
              placeholder="入力"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>検索</button>
          </div>
          <div className="pa">
            <h2>おすすめ金融商品</h2>
          </div>
          <div className="product-list">
            {[1, 2].map((num) => (
              <div key={num} className="product-card">
                <h3>1 仮想通貨</h3>
                <p>専門家Aさん</p>
                <div>おすすめ ★☆☆☆☆</div>
                <div>レビュー ★☆☆☆☆</div>
              </div>
            ))}
          </div>
        </div>
        <div className="recommendations">

        </div>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/review" element={<ReviewRanking />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
      </Routes>
    </Router>
  );
}