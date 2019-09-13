import React from 'react';
import './card.styles.css';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2> {props.monster.name} </h2>
      <p> {props.monster.email} </p>
    </div>
  );
}

Card.propTypes = {
  monster: PropTypes.object.isRequired
};

export default Card;