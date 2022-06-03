import styled from 'styled-components';
import { ICardStyle } from '../../ts-types/styleTypes';

const CardStyle = styled.section<ICardStyle>`
  background: #ffffff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.06);
  flex-basis: 100%;
  margin: 30px 0;
  padding: 2rem;
  color: ${({ theme }) => theme.pryCol};

  h1 {
    font-size: 3.45rem;
    font-weight: 400;

    sup {
      color: ${({ theme }) => theme.btnCol};
    }
  }

  p {
    margin-top: 10px;
  }

  .policy-bar,
  .claim-bar {
    margin-top: 30px;

    .description {
      display: flex;
      justify-content: space-between;
    }

    progress {
      width: 100%;
      height: 5px;
      color: red;
    }
  }

  @media (min-width: 768px) {
    flex-basis: 32%;
    padding: 1rem;
  }
`;

export default CardStyle;
