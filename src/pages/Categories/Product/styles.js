import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  margin: ${metrics.baseMargin / 2}px;
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.baseMargin}px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  max-width:${(metrics.screenWidth - 4 * metrics.baseMargin) / 2};
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.black};
`;

export const Brand = styled.Text`
  color: ${colors.light};
`;

export const Price = styled.Text`
  color: ${colors.secundary};
  font-size: 18px;
  margin-top: ${metrics.baseMargin / 2}px;
  font-weight: bold;
`;
