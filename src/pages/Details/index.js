import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import CartActions from '~/store/ducks/cart';
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
  Avatar,
} from './styles';

function handleCartAdd(product, navigation, addToCart) {
  navigation.navigate('Cart');
  addToCart(product);
}

const Details = ({ navigation, addToCart }) => {
  const product = navigation.getParam('product');
  return (
    <Container>
      <Header title="Detalhes do produto" backButton />
      <ContentContainer>
        <ContentCard>
          <Avatar source={{ uri: product.image }} />
          <TextContainer>
            <DescriptionContainer>
              <Title>{product.name}</Title>
              <Brand>{product.brand}</Brand>
            </DescriptionContainer>
            <Price>{product.price}</Price>
          </TextContainer>
          <AddToCartButtom onPress={() => handleCartAdd(product, navigation, addToCart)}>
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
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
