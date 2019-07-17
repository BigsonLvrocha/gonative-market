import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import CategoryActions from '~/store/ducks/category';
import Category from './Category';
import Product from './Product';
import {
  Container, CategoriesList, CategoriesContainer, Products, Loading, ProductsContainer,
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
    product: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  }

  componentDidMount() {
    const { fetchCategoryRequest } = this.props;
    fetchCategoryRequest();
  }

  render() {
    const { category, product } = this.props;
    return (
      <Container>
        <Header title="GoCommerce" />
        <CategoriesContainer>
          {
          category.isLoading ? (
            <Loading />
          ) : (
            <CategoriesList
              data={category.data}
              renderItem={({ item }) => (
                <Category
                  category={item}
                />
              )}
              keyExtractor={item => String(item.id)}
            />
          )
          }
        </CategoriesContainer>
        <ProductsContainer>
          {product.isLoading ? (
            <Loading />
          ) : (
            <Products
              data={product.data}
              renderItem={({ item }) => <Product product={item} />}
              keyExtractor={item => String(item.id)}
            />
          )}
        </ProductsContainer>
        <Bottom />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
