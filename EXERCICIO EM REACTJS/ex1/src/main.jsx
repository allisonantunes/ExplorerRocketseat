import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './components/Header'
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <Header />
      <GlobalStyles />
      </ThemeProvider>
  </React.StrictMode>
)
