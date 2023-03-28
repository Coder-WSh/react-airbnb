import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"

import App from '@/view/App'
import store from './store/store'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme/theme'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
