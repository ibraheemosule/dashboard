import styled from 'styled-components';
import { INavbarStyle } from '../../ts-types/styleTypes';

export const NavbarStyle = styled.nav<INavbarStyle>`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 2;
  overflow: initial;
  flex: 0 0;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  color: ${({ theme: { secCol } }) => secCol};
  padding: 0.5rem 0;

  .logo {
    margin: 0 5px;
    z-index: 2;
  }

  section {
    position: absolute;
    z-index: 1;
    top: 100%;
    width: 100%;
    padding-bottom: 1rem;
    border-radius: 0 0 20px 0;
    animation: slide-out 0s 0s ease 1 forwards;
    background: inherit;

    .user-avi {
      margin: 0 0 50px -2rem;
      text-align: center;

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

    ul {
      list-style-type: none;
      padding-inline-start: 0;

      li {
        padding-left: 30%;
        transform: translate(-100%, -100%);

        button {
          color: ${({ theme: { secCol } }) => secCol};
          text-decoration: none;
          display: flex;
          background: none;
          outline: none;
          border: none;
          padding: 10px 5px;
          text-align: center;
          cursor: pointer;
          align-items: center;
          font-size: 1rem;

          &:hover {
            color: ${({ theme: { btnCol } }) => btnCol};
          }

          span {
            margin-left: 20px;
            font-size: inherit;
            transition: all 0.3s ease-in;
          }

          svg {
            fill: hsla(207, 69%, 97%, 0.488);
            transition: all 0.3s ease-in;
          }
        }
        .active {
          color: ${({ theme: { btnCol } }) => btnCol};
        }
      }
    }
  }

  .hamburger {
    background: transparent;
    margin: 0 1rem;
    outline: none;
    border: none;
    align-self: center;
    cursor: pointer;

    span {
      display: block;
      width: 30px;
      height: 3px;
      margin-top: 7px;
      background: ${({ theme: { secCol } }) => secCol};
      transition: all 0.2s ease-in;
    }

    .first {
      margin-top: 0;
    }
    .second {
      width: 25px;
      margin-left: auto;
    }

    ${({ toggleIcon }) =>
      toggleIcon &&
      `
      padding-right: 0.1rem;
      .first {
        transform: rotateZ(45deg) translate(5px, 350%);
      }
      .second {
        opacity: 0;
        background: red;
      }
      .third {
        transform: rotateZ(-45deg) translate(10%, -300%);
      }
    `}
  }

  @media (min-width: 500px) {
    .list {
      li {
        padding-left: 40%;
      }
    }
  }

  @media (min-width: 768px) {
    height: 100vh;
    max-height: 100vh;
    width: 18.523%;
    max-width: 306px;
    padding: 1rem 0 1rem 0.5rem;
    z-index: 1;
    flex-direction: column;
    box-shadow: 10px 3px 15px rgba(0, 0, 0, 0.05);
    border-radius: 20px 0px 20px 20px;

    .logo {
      width: 100%;
      margin: 0;

      svg {
        width: 80%;
      }
    }

    .list {
      flex-grow: 1;
      display: flex;
      position: static;
      flex-direction: column;
      animation: none;
      padding: 0 0 0;

      .user-avi {
        margin: 0 0 50px;
        padding: 1rem;

        button {
          padding: 0.5rem 1rem;
        }
      }

      li {
        display: block;
        padding-left: 0;
        transform: translate(0, 0);

        button {
          font-size: 0.8rem;
        }
      }
      li:last-of-type {
        position: absolute;
        bottom: 2%;
      }
    }

    .hamburger {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 1rem;

    .logo {
      margin: 0 0 0 -15px;
      svg {
        width: 100%;
      }
    }

    .list {
      .user-avi {
        margin: 10px 0 50px -2rem;
        padding: 0;

        button {
          padding: 1rem 2rem;
        }
      }

      li {
        button {
          font-size: 1rem;
        }
      }
    }
  }
  @media (min-width: 1340px) {
    padding-left: 3.5rem;

    .logo {
      margin: 0 0 0 -25px;
    }
  }
`;
