import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import CategoryActions from '~/store/ducks/category';
import { products } from './mockData';
import Category from './Category';
import Product from './Product';
import {
  Container, CategoriesList, CategoriesContainer, Products,
} from './styles';

class Categories extends Component {
  static propTypes = {
    category: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
    }).isRequired,
    fetchCategoryRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchCategoryRequest } = this.props;
    fetchCategoryRequest();
  }

  render() {
    const { category } = this.props;
    return (
      <Container>
        <Header title="GoCommerce" />
        <CategoriesContainer>
          <CategoriesList
            data={category.data}
            renderItem={({ item }) => <Category category={item} />}
            keyExtractor={item => String(item.id)}
          />
        </CategoriesContainer>
        <Products
          data={products}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={item => String(item.id)}
        />
        <Bottom />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
