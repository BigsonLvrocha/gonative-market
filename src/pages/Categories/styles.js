import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex: 1;
  height: ${metrics.screenHeight}px;
`;

export const CategoriesContainer = styled.View`
  height: 45px;
`;

export const Categories = styled.FlatList.attrs({
  horizontal: true,
})`
  background-color: ${colors.primary};
  height: 50px;
`;

export const Products = styled.FlatList.attrs({
  numColumns: 2,
})`
  padding: ${metrics.baseMargin}px;
  background: ${colors.lighter}
`;
