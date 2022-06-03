import styled from 'styled-components';
import { IMainSectionStyle } from '../../ts-types/styleTypes';

const MainSectionStyle = styled.article<IMainSectionStyle>`
  padding: 50px 15px;

  @media (min-width: 768px) {
    padding: 0;
    margin-left: 18.523%;
  }
`;

export default MainSectionStyle;
