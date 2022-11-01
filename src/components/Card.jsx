import PropTypes from 'prop-types';
import React from 'react';
import './card.css';
import { Input, Label, Form, Card } from 'reactstrap';

class Card2 extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;

    return (
      <Card>
        <p data-testid="name-card">Nome.......................................{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">Descrição................................{ cardDescription }</p>
        <p data-testid="attr1-card">Força.......................................{ cardAttr1 }</p>
        <p data-testid="attr2-card">Agilidade................................{ cardAttr2 }</p>
        <p data-testid="attr3-card">Defesa.....................................{ cardAttr3 }</p>
        <p data-testid="rare-card">Raridade..................................{ cardRare }</p>
        { cardTrunfo
          ? <p data-testid="trunfo-card">Super Trunfo</p>
          : <div /> }
      </Card>
    );
  }
}

Card2.propTypes = {
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card2;
