import { createGlobalStyle } from 'styled-components';
import { GlobalStyleProps } from '../../ts-types/styleTypes';

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none; 
}
*::-webkit-scrollbar { width: 0 !important }

body {
    width: 100vw;
    font-size: 16px;
    background: ${({ theme }) => theme.bgCol};
}

@keyframes slide-in {
    from {
      transform: translate(-100%, -100%);

    }

    to {
      transform: translate(0%, 0%);

    }
  }

  @keyframes slide-out {
    from {
      transform: translate(0%, 0%);

    }

    to {
      transform: translate(-100%, -100%);

    }


  }
`;

export default GlobalStyle;
