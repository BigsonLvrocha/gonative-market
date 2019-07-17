import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Title, Brand, Price, Image,
} from './styles';

const Product = ({ product }) => (
  <Container>
    <Image source={{ uri: product.image }} />
    <Title>{product.name}</Title>
    <Brand>{product.brand}</Brand>
    <Price>
      {(product.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}
    </Price>
  </Container>
);

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Product;
