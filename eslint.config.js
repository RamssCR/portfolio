// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config'
import a11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import js from '@eslint/js'
import reactDOM from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'],
      tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      a11y: a11y,
      'react-dom': reactDOM,
      'react-hooks': reactHooks.meta,
    },
  },
])