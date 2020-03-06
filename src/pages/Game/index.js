import React, { Component } from 'react';
import { FaBookOpen } from 'react-icons/fa';

import { loadHeroData } from '../../services/hero';
import { getRandomItem, shuffle } from '../../utils/common';
import {
  Container,
  HeroCard,
  SubmitButton,
  NextButton,
  EndGame,
} from './styles';

export default class Game extends Component {
  state = {
    allHeroes: [],
    correctHero: null,
    heroOptions: [],
    selectedHeroName: '',
    pontos: 0,
    counter: 0,
    hidden: false,
    enable: true,
    disabled: false,
  };

  randomHero(exclude) {
    const { allHeroes } = this.state;
    return getRandomItem({ all: allHeroes, exclude });
  }

  async loadHero() {
    const allHeroes = await loadHeroData();

    this.setState({ allHeroes });
  }

  showRandomHero() {
    const correctHero = this.randomHero();
    const { selectedHeroName } = this.state;

    const newHeroOptions = [correctHero];

    newHeroOptions.push(this.randomHero(newHeroOptions));
    newHeroOptions.push(this.randomHero(newHeroOptions));

    this.setState({
      correctHero,
      heroOptions: shuffle(newHeroOptions),
    });

    if (selectedHeroName === '') {
      this.setState({
        disabled: true,
      });
    }
  }

  async componentDidMount() {
    await this.loadHero();
    this.showRandomHero();
  }

  getName = e => {
    e.preventDefault();
    this.setState({
      selectedHeroName: e.target.value,
      disabled: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { correctHero, selectedHeroName, pontos, counter } = this.state;

    if (selectedHeroName === correctHero?.name) {
      this.setState({
        pontos: pontos + 20,
        selectedHeroName: '',
        counter: counter + 1,
        disabled: true,
      });
    } else {
      this.setState({
        selectedHeroName: '',
        counter: counter + 1,
        disabled: true,
      });
    }
    this.showRandomHero();

    if (counter === 6) {
      this.setState({ hidden: true, enable: false });
    }
  };

  render() {
    const {
      correctHero,
      counter,
      pontos,
      heroOptions,
      hidden,
      enable,
      disabled,
    } = this.state;

    return (
      <>
        <Container hidden={hidden}>
          <h1>
            <FaBookOpen />
            Adivinhe o Super!
          </h1>

          <HeroCard>
            <img src={correctHero?.images.sm} alt={correctHero?.name} />
            {heroOptions.map(option => (
              <SubmitButton
                key={option.id}
                onClick={this.getName}
                value={option.name}
              >
                {option.name}
              </SubmitButton>
            ))}
            <NextButton disabled={disabled} onClick={this.handleSubmit}>
              Próximo!
            </NextButton>
            <p>Pontos: {pontos}</p>
          </HeroCard>
        </Container>
        <EndGame enable={enable}>
          <h1>Parabéns!</h1>
          <p>Você fez {pontos} pontos!</p>
          <p>
            Você acertou {Math.floor((pontos * 100) / (counter * 20))}% das
            questões!
          </p>
          <a href="/">Retornar!</a>
        </EndGame>
      </>
    );
  }
}
