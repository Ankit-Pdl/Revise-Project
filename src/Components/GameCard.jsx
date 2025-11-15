// ...existing code...
import React, { useState } from "react";
import "./GameCard.css";

const GameCard = ({ title = "Game Title", image, price = 29.99 }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked((v) => !v);
  };

  const formattedPrice = price === 0 ? "Free" : `$${Number(price).toFixed(2)}`;

  return (
    <article className="game-card">
      <div className="game-thumb">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>

      <div className="game-body">
        <h3 className="game-title">{title}</h3>

        {/* price shown under title */}
        <div className="game-price">{formattedPrice}</div>

        <button
          type="button"
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label={liked ? `Unlike ${title}` : `Like ${title}`}
        >
          <span className="heart" aria-hidden="true">
            ♥
          </span>
          <span className="sr-only">{liked ? "Liked" : "Like"}</span>
        </button>
      </div>
    </article>
  );
};

export default GameCard;
// ...existing code...
