import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import Head from './Head';

interface ButtonData {
  id: number;
  label: string;
  name: string;
  link: string;
}

function Screen2() {
  const [buttons, setButtons] = useState<ButtonData[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('term') || '';

  useEffect(() => {
    // サーバーのポート番号を確認してURLを修正
    fetch(`http://localhost:3001/api/buttons?term=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('ネットワークエラー');
        }
        return response.json();
      })
      .then((data: ButtonData[]) => {
        console.log(data); // データをコンソールに表示
        setButtons(data);
      })
      .catch(error => console.error('データ取得エラー:', error));
  }, [searchTerm]);

  return (
    <div>
      <Head />
      <main>
        <div className="search-section">
          <h2><span className="search-icon">🔍</span> 検索結果</h2>
          <div className="search-bar">
            <input type="text" placeholder="入力" defaultValue={searchTerm} />
            <button>探す</button>
          </div>
          <div className="search-results">
            <div className="search-condition">
              検索条件: <span className="search-term">{searchTerm}</span>
            </div>
            <div className="result-buttons">
              {buttons.map((button) => (
                <Link to={button.link} key={button.id}>
                  <button>{button.name} →</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Screen2;
