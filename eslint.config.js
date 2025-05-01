import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    keyframes: {
      bounce: {
        "0%, 100% ":{
          transform: "translateY(0)"
        },
        "50%" :{
          transform: "translateY(-10px)"
        }
      }
    },
    keyframes: {
      glowAnimation: {
        "0%" : {
          boxshadow: "0px 0px 5px 2px rgba(79, 161, 102, 0.3)"
        },
        "100%" : {
          boxshadow: "0px 0px 15px 5px rgba(79, 161, 102, 0.9)"
        }
      }
    },
    keyframes: {
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
        "75%": { transform: "translateX(-3px)" }
      }
    },
    keyframes: {
      floating: {
       " 0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0)" }
      }
    },
    keyframes: {
      heartbeat: {
        "0%": { transform: "scale(1)"},
        "50%": { transform: "scale(1.2)"},
        "100%": { transform: "scale(1)"}
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    boxShadow: {
      'custom': '0 2px 0 rgba(0, 0, 0, 0.043)'
    },
    boxShadow: {
      'custom-2': '0 0 16px rgba(0, 0, 0, 0.08)',
    },
    boxShadow: {
      'custom-3': '0 0 8px rgba(0, 0, 0, .12)',
    },
    fontFamily: {
      'sf-pro': ['"SF Pro Text"', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(95deg, #00c9ed 15%, #0175d0 45%, #014cb9 75%, #0135af 100%)',
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
