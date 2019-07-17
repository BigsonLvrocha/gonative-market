import React from 'react';
import {
  Container, Title, Brand, Price,
} from './styles';

const Product = () => (
  <Container>
    <Title>Title</Title>
    <Brand>Brand</Brand>
    <Price>
      {(50).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}
    </Price>
  </Container>
);

export default Product;
