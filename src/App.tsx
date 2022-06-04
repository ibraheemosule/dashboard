import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle.styled';
import theme from './assets/styles/Theme.styled';
import Layout from './components/Layout';
import MainSection from './components/MainSection';
import { Context } from './assets/utils/Context';
import { useEffect, useState } from 'react';

function App() {
  const [stateToTriggerRerender, forceRerender] = useState(true);

  const triggerRerender = () => forceRerender((val) => !val);

  useEffect(() => {
    window.addEventListener('resize', triggerRerender);

    return () => window.removeEventListener('resize', triggerRerender);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ stateToTriggerRerender }}>
        <Layout>
          <MainSection />
        </Layout>
        <GlobalStyle />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
