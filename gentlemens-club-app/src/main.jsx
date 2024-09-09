import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx';
import GlobalStyle from './styled_components/GlobalStyle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GlobalStyle />
    <Router>
    <App />
    </Router>
  </StrictMode>,
);
