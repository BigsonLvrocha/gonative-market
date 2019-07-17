import styled, { css } from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 ${metrics.basePadding}px;
  align-items: center;

  ${({ active }) => (active ? css`
    border-style: solid;
    border-bottom-width: 5px;
    border-bottom-color: ${colors.white};
  ` : null)}
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: bold;
`;
