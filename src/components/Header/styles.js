import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${metrics.basePadding}px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: bold;
`;

export const Fill = styled.View`
  width: 24px;
`;

export const BackButton = styled(Icon).attrs({
  color: colors.regular,
  size: 24,
})``;
