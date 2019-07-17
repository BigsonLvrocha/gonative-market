import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

const Category = ({ active, category }) => (
  <Container active={active}>
    <Title>{category.title}</Title>
  </Container>
);

Category.propTypes = {
  active: PropTypes.bool,
  category: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

Category.defaultProps = {
  active: false,
};

export default Category;
