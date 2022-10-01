import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom';
import theme from './const/theme';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>,
  document.getElementById('root')
);
