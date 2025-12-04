import './index.css'
import './plugins/i18n.ts'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@providers/ThemeProvider.tsx'
import { MODE } from './utils/env.config.ts'

console.log(__APP_VERSION__)
if (__IS_STAGING__) {
  console.log('Running in staging mode')
}

if (MODE === 'production') {
  import('./plugins/firebase.ts')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
