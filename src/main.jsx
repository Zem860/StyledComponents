import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './GlobalStyle.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
