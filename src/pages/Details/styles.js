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
  align-items: stretch;
  flex: 1;
`;

export const ContentCard = styled.View`
  margin: ${metrics.baseMargin}px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  background: ${colors.white};
`;

export const TextContainer = styled.View`
  margin-top: ${metrics.basePadding}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 18px;
`;

export const Brand = styled.Text`
  color: ${colors.light};
`;

export const Price = styled.Text`
  color: ${colors.secundary};
  font-size: 36px;
  font-weight: bold;
`;

export const AddToCartButtom = styled.TouchableOpacity`
  padding: ${metrics.basePadding}px;
  background: ${colors.secundary};
  margin-top: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
`;

export const AddToCartButtonText = styled.Text`
  color: ${colors.white};
  text-align: center;
`;

export const Avatar = styled.Image`
  height: 500px;
  margin: 0 70px;
`;
