import styled from 'styled-components';
import { ICardStyle } from '../../ts-types/styleTypes';

const CardStyle = styled.section<ICardStyle>`
  background: #fff;
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

    progress[value] {
      -webkit-appearance: none;
      appearance: none;
    }

    progress[value]::-webkit-progress-bar {
      background: linear-gradient(90deg, #ececec 0%, #f2f1f1 111.47%);
      border-radius: 7px;
    }

    progress[value]::-webkit-progress-value {
      background: linear-gradient(90deg, #33d69f 0%, #50edb8 111.47%);
      border-radius: 7px;
    }

    progress::-moz-progress-bar {
      background: linear-gradient(90deg, #33d69f 0%, #50edb8 111.47%);
      border-radius: 7px;
    }
  }

  .claim-bar {
    progress[value]::-webkit-progress-value {
      background: linear-gradient(90deg, #713bdb 0%, #a886e9 111.47%);
    }
    progress::-moz-progress-bar {
      background: linear-gradient(90deg, #713bdb 0%, #a886e9 111.47%);
    }
  }

  @media (min-width: 768px) {
    flex-basis: 32%;
    padding: 1rem;
  }
`;

export default CardStyle;
