import React, { Component } from 'react';
import {
  Container, Categories, CategoriesContainer, Products,
} from './styles';
import Header from '~/components/Header';
import Bottom from '~/components/BottomNavigation';
import data, { products } from './mockData';
import Category from './Category';
import Product from './Product';

export default class index extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <Container>
        <Header title="GoCommerce" />
        <CategoriesContainer>
          <Categories
            data={data}
            renderItem={() => <Category />}
            keyExtractor={item => String(item.id)}
          />
        </CategoriesContainer>
        <Products
          data={products}
          renderItem={() => <Product />}
          keyExtractor={item => String(item.id)}
        />
        <Bottom />
      </Container>
    );
  }
}
