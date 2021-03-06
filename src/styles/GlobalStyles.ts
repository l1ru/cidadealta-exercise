import {
    createGlobalStyle
} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');

    :root {
        --blue: #1976d2;
        --blue-dark: #2C3246;
        --gray: #9195a0;
        --white: #fff;

        --font-inter: "Inter", sans-serif;
        --font-sora: "Sora", sans-serif;
        
    }


    body {
        margin: 0 auto;
        max-width: 1080px;
        background-color: rgba(0,0,0, .5);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  
`