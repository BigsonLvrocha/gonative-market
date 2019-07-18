import React from 'react';

import { View } from 'react-native';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';

import { Container, ContentContainer } from './styles';

const Cart = () => (
  <Container>
    <Header title="Carrinho" />
    <ContentContainer />
    <Bottom />
  </Container>
);
export default Cart;
