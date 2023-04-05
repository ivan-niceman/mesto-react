import React from 'react';

export default function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {

  return (

    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button aria-label="закрыть" type="button" className="popup__button-close" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form action="#" name={name} className="popup__form">
          {children}
          <button aria-label="сохранить" className="popup__button-save popup__button-inactive">{buttonText}</button>
        </form>
      </div>
    </section>
  )
}