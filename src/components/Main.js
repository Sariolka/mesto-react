import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            type="button"
            aria-label="Изменить аватар"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          >
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </button>
          <div className="profile__container">
            <h1 className="profile__name"> {userName} </h1>
            <button
              type="button"
              aria-label="Изменить данные профиля"
              className="profile__edit-button"
              onClick={onEditProfile}
            />
            <p className="profile__description"> {userDescription} </p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Создать карточку с фотографией"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Природа России">
        <ul className="cards">
          {cards.map((card) => (
            <Card key={card._id} onCardClick={onCardClick} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
