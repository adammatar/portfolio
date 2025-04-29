import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #3B82F6;
    --color-secondary: #10B981;
    --color-text: #1F2937;
    --color-text-light: #6B7280;
    --color-background: #FFFFFF;
    --color-background-light: #F3F4F6;
    --color-border: #E5E7EB;
  }

  [data-theme='dark'] {
    --color-primary: #60A5FA;
    --color-secondary: #34D399;
    --color-text: #F3F4F6;
    --color-text-light: #9CA3AF;
    --color-background: #1F2937;
    --color-background-light: #374151;
    --color-border: #4B5563;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.5;
    transition: background-color 0.3s, color 0.3s;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--color-secondary);
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 5rem 0;
  }
`; 