import React, { Component } from 'react';
import { Container } from './styles';
import Header from '~/components/Header';

export default class index extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <Container>
        <Header title="GoCommerce" />
      </Container>
    );
  }
}
