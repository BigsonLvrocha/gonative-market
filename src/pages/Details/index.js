import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import {
  Container,
  ContentCard,
  ContentContainer,
  TextContainer,
  DescriptionContainer,
  Title,
  Brand,
  Price,
  AddToCartButtom,
  AddToCartButtonText,
} from './styles';

const Details = ({ navigation }) => {
  const product = navigation.getParam('product');
  return (
    <Container>
      <Header title="Detalhes do produto" backButton />
      <ContentContainer>
        <ContentCard>
          <TextContainer>
            <DescriptionContainer>
              <Title>{product.name}</Title>
              <Brand>{product.brand}</Brand>
            </DescriptionContainer>
            <Price>{product.price}</Price>
          </TextContainer>
          <AddToCartButtom>
            <AddToCartButtonText>Adicionar ao carrinho</AddToCartButtonText>
          </AddToCartButtom>
        </ContentCard>
      </ContentContainer>
      <Bottom />
    </Container>
  );
};

Details.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default Details;
