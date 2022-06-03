import styled from 'styled-components';
import { ICardWrapperStyle } from '../../ts-types/styleTypes';

const CardWrapperStyle = styled.article<ICardWrapperStyle>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1240px) {
    margin: 0 0 0 30px;
  }
`;

export default CardWrapperStyle;
