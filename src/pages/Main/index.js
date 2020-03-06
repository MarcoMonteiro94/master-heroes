import React from 'react';

import { Container, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>Olá.</h1>
      <h2>Seja bem-vindo.</h2>
      <p>Você está participando agora do</p>
      <br />
      <span>Master Heroes!</span>
      <br />
      <p>
        Um jogo que desafiará seus conhecimentos sobre os mais diversos heróis e
        vilões de nosso universo geek.
      </p>
      <p>
        Sua missão é realizar o reconhecimento do maior número de personalidades
        para testarmos o seu nível de conhecimentos e adquirir o título de
        verdadeiro Master Hero.
      </p>

      <SubmitButton href="/game">PLAY</SubmitButton>
    </Container>
  );
}
