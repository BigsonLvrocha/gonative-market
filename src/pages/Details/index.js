import React from 'react';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import { Container } from './styles';

const Details = () => (
  <Container>
    <Header title="Detalhes do produto" backButton />
    <Bottom />
  </Container>
);

export default Details;
