import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import CartItem from './CartItem';

import {
  Container, ContentContainer, ItemsList, TotalContainer, TotalPrice, Subtotal,
} from './styles';

const Cart = ({ cart, subtotal }) => (
  <Container>
    <Header title="Carrinho" />
    <ContentContainer>
      <ItemsList
        data={cart.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem item={item}>Um Item</CartItem>}
      />
      <TotalContainer>
        <Subtotal>Subtotal</Subtotal>
        <TotalPrice>
          {subtotal.toLocaleString('pt-BR', {
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
  subtotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  subtotal: state.cart.data.reduce((prev, curr) => (prev + curr.amount * curr.product.price), 0),
});

export default connect(mapStateToProps)(Cart);
