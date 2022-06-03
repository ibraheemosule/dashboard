import styled from 'styled-components';
import { ITopHeaderStyle } from '../../ts-types/styleTypes';

const TopHeaderStyle = styled.aside<ITopHeaderStyle>`
  padding: 1.5rem 3rem;
  background: #fff;
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0px 20px 0px 0px;

  ul {
    display: flex;
    list-style-type: none;

    li {
      margin-right: 2.5rem;
      line-height: 21.28px;

      button {
        outline: none;
        border: none;
        color: inherit;
        font-size: inherit;
        background: none;
        cursor: pointer;
        transition: all 0.2s ease-in;

        hr {
          opacity: 0;
          background: ${({ theme }) => theme.btnCol};
          width: 16px;
          height: 3px;
          margin: 3px auto;
          transition: all 0.2s ease-in;
        }
      }

      .active {
        color: ${({ theme }) => theme.btnCol};

        hr {
          opacity: 1;
        }
      }
    }
  }
`;

export default TopHeaderStyle;
