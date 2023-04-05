import React from 'react';

export default function Card( props ) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return(

    <li className="element">
      <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick} />
      <button aria-label="корзина" type="button" className="element__trash"></button>
      <div className="element__group">
        <h3 className="element__title">{props.card.name}</h3>
        <span>
          <button aria-label="лайк" type="button" className="element__like"></button>
          <p className="element__number-likes">{props.card.likes.length}</p>
        </span>
      </div>
    </li>

  )
}