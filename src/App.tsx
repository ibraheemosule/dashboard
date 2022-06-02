import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle.styled';
import theme from './assets/styles/Theme.styled';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>welcome to react</div>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
