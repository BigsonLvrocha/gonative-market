import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';
import {
  Container,
  Avatar,
  DetailsContainer,
  Title,
  Brand,
  Price,
  ActionContainer,
  AmountInput,
  CloseIcon,
  CloseButton,
} from './styles';


class CartItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number,
      amount: PropTypes.number,
      product: PropTypes.shape({
        image: PropTypes.string,
        brand: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
      }),
    }).isRequired,
    updateCartItemAmount: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  }

  state = {
    amount: '',
  }

  componentDidMount() {
    this.resetAmount();
  }

  resetAmount = () => {
    const { item } = this.props;
    this.setState({
      amount: String(item.amount),
    });
  }

  handleUpdateAmount = () => {
    const { updateCartItemAmount, item } = this.props;
    const { amount } = this.state;
    const newAmount = Number.parseInt(amount, 10);
    if (Number.isNaN(newAmount) || newAmount < 0) {
      this.resetAmount();
      return;
    }
    updateCartItemAmount(item.id, newAmount);
  }


  render() {
    const { amount } = this.state;
    const { item, removeFromCart } = this.props;
    return (
      <Container>
        <Avatar source={{ uri: item.product.image }} />
        <DetailsContainer>
          <Title>{item.product.name}</Title>
          <Brand>{item.product.brand}</Brand>
          <Price>{item.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
        </DetailsContainer>
        <ActionContainer>
          <AmountInput value={String(amount)} onChangeText={text => this.setState({ amount: text })} onBlur={this.handleUpdateAmount} keyboardType="number-pad" />
          <CloseButton onPress={() => removeFromCart(item.id)}>
            <CloseIcon name="close" />
          </CloseButton>
        </ActionContainer>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
