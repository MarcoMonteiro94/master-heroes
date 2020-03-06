import React from 'react';

import { Container, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>Olá! Seja bem-vindo!</h1>

      <SubmitButton href="/game">Ir para o jogo</SubmitButton>
    </Container>
  );
}
