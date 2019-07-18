import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';

import {
  Container, ContentContainer, ItemsList, TotalContainer, TotalPrice, Subtotal,
} from './styles';

const Cart = ({ cart }) => (
  <Container>
    <Header title="Carrinho" />
    <ContentContainer>
      <ItemsList
        data={cart.data}
        keyExtractor={item => String(item.id)}
        renderItem={() => <Text>Um Item</Text>}
      />
      <TotalContainer>
        <Subtotal>Subtotal</Subtotal>
        <TotalPrice>
          {(50).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </TotalPrice>
      </TotalContainer>
    </ContentContainer>
    <Bottom />
  </Container>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
  }).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
