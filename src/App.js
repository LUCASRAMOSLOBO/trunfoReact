import React from 'react';
import Formulario from './components/Formulario';
import Card2 from './components/Card';
import Header from './components/Header';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    // onInputChange,
    // onSaveButtonClick,
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, hasTrunfo, cardTrunfo } = this.state;
    const cardSaved = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardList: true,
    };
    this.setState((prevState) => ({
      cards: [...prevState.cards, cardSaved],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), (() => {
      const { cards } = this.state;
      const alreadyTrunfo = cards.find((element) => element.cardTrunfo === true);
      if (alreadyTrunfo) {
        this.setState({
          hasTrunfo: true,
        });
      }
      console.log(cards);
    }));
  };

  validator = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const semVazio = (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== '');
    const totalsum = 210;
    const sum90 = 90;
    const lowCap = 0;
    const parsed1 = parseInt(cardAttr1, 10);
    const parsed2 = parseInt(cardAttr2, 10);
    const parsed3 = parseInt(cardAttr3, 10);
    const sum = parsed1 + parsed2 + parsed3;
    const validação = (sum <= totalsum
      && parsed1 <= sum90
      && parsed2 <= sum90
      && parsed3 <= sum90
      && parsed1 >= lowCap
      && parsed2 >= lowCap
      && parsed3 >= lowCap
    );
    const validar = (validação && semVazio);
    this.setState({
      isSaveButtonDisabled: !validar,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validator);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <div>
        <Header />
        <div>
          <h2 Style="color:white; position:relative; top:120px; text-align: center">
            Adicione uma nova carta
          </h2>
        </div>
        <div className="flex">
          <Formulario
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card2
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
          { cards.map((card) => (<Card2
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />))}
        </div>
      </div>
    );
  }
}

export default App;
