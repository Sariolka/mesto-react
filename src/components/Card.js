import React from "react";

function Card({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <button
        type="button"
        aria-label="Удалить карточку с фотографией"
        className="card__delete"
      />
      <img
        src={card.link}
        alt={card.name}
        className="card__photo"
        onClick={handleCardClick}
      />
      <div className="card__footer">
        <h2 className="card__title"> {card.name} </h2>
        <div className="card__like-container">
          <button
            type="button"
            aria-label="Поставить лайк"
            className="card__like"
          />
          <p className="card__like-count"> {card.likes.length} </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
