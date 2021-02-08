import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle(
  () => css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

    * {
      margin: 0;
      border: 0;
      padding: 0;
      box-sizing: border-box;
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    body {
      font-family: 'Noto Sans', sans-serif;
    }
  `
)

export default GlobalStyles
