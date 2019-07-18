import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex: 1;
`;


export const ContentContainer = styled.View`
  background: ${colors.lighter};
  flex: 1;
  align-items: stretch;
`;

export const ItemsList = styled.FlatList``;

export const TotalContainer = styled.View`
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
`;

export const Subtotal = styled.Text`
  color: ${colors.light};
  text-align: center;
`;

export const TotalPrice = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 36px;
  margin-top: ${metrics.basePadding}px;
  text-align: center;
`;
