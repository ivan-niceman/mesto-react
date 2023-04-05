import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCurrentUser()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));

    api.getCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main>

      <section className="profile">
        <button className="profile__avatar-edit" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Автор" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <h2 className="profile__subtitle">{userDescription}</h2>
        </div>
        <button aria-label="редактировать" type="button" className="profile__button-edit" onClick={onEditProfile}></button>
        <button aria-label="добавить" type="button" className="profile__button-add" onClick={onAddPlace}></button>
      </section>

      <ul className="elements">
        {cards.map(card => <Card key={card.id} card={card} onCardClick={onCardClick} />)}
      </ul>

    </main>
  )
}