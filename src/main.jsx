import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App            from './App.jsx'
import axios          from 'axios'
import './index.css'


// ================ INIT ==============//
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
)
