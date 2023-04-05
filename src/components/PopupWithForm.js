import React from 'react';

export default function PopupWithForm({ title, name, children, isOpen, onClose }) {

  return (

    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button aria-label="закрыть" type="button" className="popup__button-close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form action="#" name={name} className="popup__form" noValidate>
          {children}
          <button aria-label="сохранить" className="popup__button-save popup__button-inactive">Сохранить</button>
        </form>
      </div>
    </section>
  )
}
