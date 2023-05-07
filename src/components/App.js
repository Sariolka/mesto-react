import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isOpenCardPopupOpen, setIsOpenCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setIsOpenCardPopupOpen(true);
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsOpenCardPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        buttonTitle={"Сохранить"}
        onClose={closeAllPopups}
      >
        <label className="popup__fieldset">
          <input
            id="avatar"
            type="url"
            name="avatar"
            className="popup__input popup__input_form_avatar"
            placeholder="Ссылка на изображение"
            required
          />
          <span className="avatar-error popup__error popup__error-avatar popup__error_visible"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        buttonTitle={"Сохранить"}
        onClose={closeAllPopups}
      >
        <label className="popup__fieldset">
          <input
            id="name"
            type="text"
            name="name"
            className="popup__input popup__input_form_name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required
          />
          <span className="name-error popup__error popup__error_visible popup__error-name"></span>
          <input
            id="about"
            type="text"
            className="popup__input popup__input_form_description"
            name="about"
            required
            placeholder="О себе"
            minLength={2}
            maxLength={200}
          />
          <span className="about-error popup__error popup__error_visible popup__error-description" />
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        buttonTitle={"Создать"}
        onClose={closeAllPopups}
      >
        <label className="popup__fieldset">
          <input
            id="place"
            type="text"
            name="place"
            className="popup__input popup__input_form_place"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="place-error popup__error popup__error-place popup__error_visible"></span>
          <input
            id="link"
            type="url"
            className="popup__input popup__input_form_link"
            name="link"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="link-error popup__error popup__error-link popup__error_visible"></span>
        </label>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isOpenCardPopupOpen}
      />
    </div>
  );
}

export default App;
