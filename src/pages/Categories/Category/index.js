import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryActions from '~/store/ducks/category';
import { Container, Title } from './styles';

const Category = ({ activeCategory, category, setCategory }) => (
  <Container
    active={activeCategory === category.id}
    onPress={() => setCategory(category.id)}
    disabled={activeCategory === category.id}
  >
    <Title>{category.title}</Title>
  </Container>
);

Category.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  category: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  setCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CategoryActions, dispatch);

const mapStateToProps = state => ({
  activeCategory: state.category.activeCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
