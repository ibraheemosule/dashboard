import styled from 'styled-components';
import { IMainSectionStyle } from '../../ts-types/styleTypes';

const MainSectionStyle = styled.article<IMainSectionStyle>`
  padding: 50px 15px;

  @media (min-width: 768px) {
    padding: 0 15px;
    margin: 0 0 0 19.5%;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 19.5%;
  }

  @media (min-width: 1340px) {
    margin: 0 19.5%;
  }
`;

export default MainSectionStyle;
