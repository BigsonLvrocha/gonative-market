import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  margin: ${metrics.baseMargin / 2}px ${metrics.basePadding}px;
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 120px;
  width: 60px;
`;

export const DetailsContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  flex: 1;
  margin-left: ${metrics.basePadding}px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-weight: bold;
`;

export const Brand = styled.Text`
  color: ${colors.light};
  font-size: 11px;
`;

export const Price = styled.Text`
  color: ${colors.secundary};
  font-weight: bold;
`;

export const ActionContainer = styled.View`
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const AmountInput = styled.TextInput`
  width: 50px;
  height: 40px;
  border-color: ${colors.light};
  border-width: 1px;
  border-radius: ${metrics.baseRadius}px;
  padding: 0 ${metrics.basePadding / 2}px;
  color: ${colors.regular};
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(Icon).attrs({
  size: 24,
  color: colors.light,
})`
  margin-left: ${metrics.basePadding}px;
  font-weight: bold;
`;
