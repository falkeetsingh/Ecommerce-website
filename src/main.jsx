import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import MainLayout from './MainLayout/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <MainLayout/>
    </Provider>
  </StrictMode>,
)