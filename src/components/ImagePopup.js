import React from 'react';

export default function ImagePopup(props) {
  return (

    <section className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <figure className="popup__figure">
        <button aria-label="закрыть" type="button" className="popup__button-close popup__button-close-image" onClick={props.onClose}></button>
        <img src={props.card && props.card.link} alt={props.card && props.card.name} className="popup__image-figure" />
        <figcaption className="popup__image-name">{props.card && props.card.name}</figcaption>
      </figure>
    </section>

  )
}