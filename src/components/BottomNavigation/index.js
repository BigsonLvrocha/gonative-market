import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { Container, Button, ButtonIcon } from './styles';

const BottomNavigation = ({ navigation }) => (
  <Container>
    <Button>
      <ButtonIcon name="home" active={navigation.state.routeName === 'Categories' || navigation.state.routeName === 'Details'} />
    </Button>
    <Button>
      <ButtonIcon name="cart" active={navigation.state.routeName === 'Cart'} />
    </Button>
  </Container>
);

BottomNavigation.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

export default withNavigation(BottomNavigation);
