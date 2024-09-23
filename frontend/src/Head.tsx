// Head.tsx
import React from 'react';
import './App.css';  // 必要に応じてスタイルシートのパスを調整してください

const Head: React.FC = () => {
  return (
    <header>
      <div className="menu-icon">≡</div>
      <h1>金融商品レビュー</h1>
      <div className="header-links">
        <a href="#">タイトル</a>
        <a href="#">ログイン</a>
      </div>
    </header>
  );
}

export default Head;