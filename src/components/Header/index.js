import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import {
  Container, Title, Fill, BackButton,
} from './styles';

const Header = ({ title, backButton, navigation }) => (
  <Container>
    {backButton ? (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackButton name="chevron-left" />
      </TouchableOpacity>
    ) : <Fill />}
    <Title>{title}</Title>
    <Fill />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backButton: PropTypes.bool,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

Header.defaultProps = {
  backButton: false,
};

export default withNavigation(Header);
