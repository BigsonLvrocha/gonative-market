import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  flex: 1;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const ButtonIcon = styled(Icon).attrs(({ active }) => ({
  color: active ? colors.primary : colors.light,
  size: 24,
}))``;
