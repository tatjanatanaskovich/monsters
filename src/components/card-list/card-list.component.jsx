import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';
import PropTypes from 'prop-types';

const CardList = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  monsters: PropTypes.array.isRequired
};

export default CardList;