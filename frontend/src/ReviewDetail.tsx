import React from 'react';
import { useParams } from 'react-router-dom';
import './App2.css';
import Head from './Head'; // Head.tsx をインポート

const ReviewDetail = () => {
  const { id } = useParams<{ id: string }>();

  // 仮のレビュー情報
  const review = {
    name: `Aさんの仮想通貨のレビュー (${id})`,
    recommend: 5,
    review: 5,
    content: '仮想通貨はAさんは仮想通貨に投資を始めた当初、すでにビットコインの価格は高騰していました。しかし、彼は「まだ上がるはずだ」と考え、持っていた貯金の多くを投入しました。しかし、その直後、仮想通貨市場は大幅な調整期に入り、ビットコインの価格は一気に半分以下に下がりました。Aさんは慌てて売却しましたが、結果として大きな損失を被りました。',
    helpful: 5
  };

  return (
    <div className="review-detail">
      <Head /> {/* Head コンポーネントを表示 */}
      <h2 className="review-title">{review.name}</h2>
      <div className="review-content">
        <div className="review-ratings">
          <span>おすすめ {renderStars(review.recommend)}</span>
          <span>レビュー {renderStars(review.review)}</span>
        </div>
        <div className="review-text">
          <h3>投稿</h3>
          <p>{review.content}</p>
        </div>
        <div className="review-helpful">
          参考になった： {renderStars(review.helpful)}
        </div>
      </div>
    </div>
  );
};

const renderStars = (rating: number) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};

export default ReviewDetail;