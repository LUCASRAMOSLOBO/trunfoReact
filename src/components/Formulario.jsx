import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form.css';
import './index';
import { Button } from 'reactstrap';
import { Input, Label, Form, Card } from 'reactstrap';

class Formulario extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange } = this.props;

    let trunfoPicker;
    if (hasTrunfo) {
      trunfoPicker = (<p>Você já tem um Super Trunfo em seu baralho</p>);
    } else {
      trunfoPicker = (
        <Label htmlFor="cardTrunfo">
          Super Trunfo?
          <Input
            Style="border:solid black 1px"
            type="checkbox"
            name="cardTrunfo"
            id="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </Label>);
    }
    return (
      <Card>
        <Form>
          <Label htmlFor="cardName">
            Nome da carta:
            <Input
              Style="width:100%; border:solid black 1px"
              type="text"
              name="cardName"
              id="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </Label>
          Descrição da carta:
          <Label htmlFor="cardDescription">
            <Input
              Style="resize: none; width:100%;border:solid black 1px"
              type="textarea"
              name="cardDescription"
              id="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="cardAttr1">
            attr1:
            <Input
              Style="width:100%; border:solid black 1px"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="cardAttr2">
            attr2:
            <Input
              Style="width:100%; border:solid black 1px"
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="cardAttr3">
            attr3:
            <Input
              Style="width:100%; border:solid black 1px"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="cardImage">
            Imagem da carta:
            <Input
              Style="width:100%; border:solid black 1px"
              type="text"
              name="cardImage"
              id="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="cardRare">
            <Input
              Style="width:100%; border:solid black 1px"
              type="select"
              name="cardRare"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </Input>
          </Label>
          { trunfoPicker }
          <Button
            Style="width:100%; border:solid black 1px"
            type="button"
            color="danger"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </Button>
        </Form>
      </Card>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Formulario;
