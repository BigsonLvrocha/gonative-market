import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const CategoriesList = styled.FlatList.attrs({
  horizontal: true,
})`
  height: 50px;
`;

export const ProductsContainer = styled.View`
  background: ${colors.lighter};
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Products = styled.FlatList.attrs({
  numColumns: 2,
})`
  padding: 0 ${metrics.baseMargin}px;
  background: ${colors.lighter};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})``;
