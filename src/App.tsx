import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle.styled';
import theme from './assets/styles/Theme.styled';
import Layout from './components/Layout';
import MainSection from './components/MainSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <MainSection />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
