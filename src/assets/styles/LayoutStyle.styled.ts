import styled from 'styled-components';
import { IStyle } from '../../ts-types/styleTypes';

const LayoutStyle = styled.main<IStyle>`
  position: relative;
  height: 100vh;
  max-width: 1500px;
  padding: 0 -15px;
  margin: auto;
`;

export default LayoutStyle;
