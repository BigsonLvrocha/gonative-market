import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

const Category = ({ active }) => <Container active={active}><Title>A category</Title></Container>;

Category.propTypes = {
  active: PropTypes.bool,
};

Category.defaultProps = {
  active: false,
};

export default Category;
