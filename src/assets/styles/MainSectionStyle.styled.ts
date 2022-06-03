import styled from 'styled-components';
import { IMainSectionStyle } from '../../ts-types/styleTypes';

const MainSectionStyle = styled.article<IMainSectionStyle>`
  padding: 50px 15px;

  .user-avi {
    margin: 50px 0;
    display: flex;
    justify-content: center;

    img {
      width: 150px;
      height: 150px;
    }

    .user-details {
      margin-left: 20px;
      h4 {
        margin: 7px 0;
        color: rgba(136, 140, 183, 1);
      }
      small {
        color: ${({ theme }) => theme.secCol};
        font-size: 0.625rem;
      }

      p {
        margin-top: 7px;
        color: ${({ theme }) => theme.secCol};

        span {
          color: ${({ theme }) => theme.btnCol};
          cursor: pointer;
        }
      }
    }

    button {
      font-weight: 700;
      padding: 1rem 2rem;
      margin-top: 20px;
      outline: none;
      border: none;
      background: ${({ theme }) => theme.btnCol};
      color: #fff;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.12);
      border-radius: 7px;
      cursor: pointer;

      &:hover {
        transform: scale(0.99);
      }

      span {
        margin-left: 5px;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0 15px;
    margin: 0 0 0 19.5%;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 19.5%;
  }

  @media (min-width: 1340px) {
    margin: 0 15% 0 19.5%;
  }
`;

export default MainSectionStyle;
