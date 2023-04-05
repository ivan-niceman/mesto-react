import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name={'edit'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__form-lable">
            <input placeholder="Имя" type="text" name="name" className="popup__input popup__input_type_name" id="name-input" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__form-lable">
            <input placeholder="Профессия" type="text" name="about" className="popup__input popup__input_type_speciality" id="speciality-input" required minLength="2" maxLength="200" />
            <span className="popup__input-error speciality-input-error"></span>
          </label>
        </>
      </PopupWithForm>

      <PopupWithForm
        name={'new-card'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__form-lable">
            <input type="text" name="name" placeholder="Название" className="popup__input popup__input_type_name popup__input_type_name-card" id="name-image-input" required minLength="2" maxLength="30" />
            <span className="popup__input-error name-image-input-error"></span>
          </label>
          <label className="popup__form-lable">
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_speciality popup__input_type_link" id="image-link-input" required />
            <span className="popup__input-error image-link-input-error"></span>
          </label>
        </>
      </PopupWithForm>

      <PopupWithForm
        name={'change-avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__form-lable">
            <input type="url" name="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_type_speciality popup__input_type_link" id="avatar-link-input" required />
            <span className="popup__input-error avatar-link-input-error"></span>
          </label>
        </>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}
