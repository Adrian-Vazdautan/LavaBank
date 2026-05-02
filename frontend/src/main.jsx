import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core' // Должно быть это
import '@mantine/core/styles.css' // И это для стилей
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider> {/* Обязательно оберни всё приложение */}
      <App />
    </MantineProvider>
  </StrictMode>,
)


