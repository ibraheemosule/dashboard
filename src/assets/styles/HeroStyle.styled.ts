import styled from 'styled-components';
import { IHeroStyle } from '../../ts-types/styleTypes';
import img from '../images/bg-img.svg';

const HeroStyle = styled.section<IHeroStyle>`
  position: relative;
  margin: 50px 0;
  padding: 1rem;
  width: 100%;
  min-height: 311px;
  background: #f8f9ff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  background-image: url(${img});
  background-position: top;
  background-size: cover;

  img {
    width: 100%;
  }

  .hero__text-wrapper {
    flex-basis: 55%;
    display: grid;
    align-content: center;
    margin: 30px 0;
    color: ${({ theme }) => theme.pryCol};
    z-index: 1;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      line-height: 2.75rem;
    }

    div {
      text-align: center;
      span:first-child {
        margin-right: 10px;
        padding: 0.2rem 1rem;
        border: 1px dashed ${({ theme }) => theme.pryCol};
        border-radius: 5px;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    margin: 50px 0 0;

    img {
      position: absolute;
      width: unset;
      top: 0;
      left: 0;
    }

    .hero__text-wrapper {
      margin: 0;
    }
  }

  @media (min-width: 1340px) {
    margin: 50px;
  }
`;

export default HeroStyle;
