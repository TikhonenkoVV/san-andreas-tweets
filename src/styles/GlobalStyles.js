import { css } from '@emotion/react';
import { theme } from 'styles/theme';
import EotBold from '../fonts/montserrat-v25-latin_cyrillic-600.eot';
import WoffBold from '../fonts/montserrat-v25-latin_cyrillic-500.woff';
import TtfBold from '../fonts/montserrat-v25-latin_cyrillic-600.ttf';
import SvgBold from '../fonts/montserrat-v25-latin_cyrillic-600.svg';

import EotMedium from '../fonts/montserrat-v25-latin_cyrillic-500.eot';
import WoffMedium from '../fonts/montserrat-v25-latin_cyrillic-500.woff';
import Woff2Medium from '../fonts/montserrat-v25-latin_cyrillic-500.woff2';
import TtfMedium from '../fonts/montserrat-v25-latin_cyrillic-500.ttf';
import SvgMedium from '../fonts/montserrat-v25-latin_cyrillic-500.svg';

export const GlobalStyles = css`
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        src: url('${EotBold}'); /* IE9 Compat Modes */
        src: local(''), url('${EotBold}?#iefix') format('embedded-opentype'),
            /* Super Modern Browsers */ url('${WoffBold}') format('woff'),
            /* Modern Browsers */ url('${TtfBold}') format('truetype'),
            /* Safari, Android, iOS */ url('${SvgBold}#Montserrat')
                format('svg'); /* Legacy iOS */
    }
    /* montserrat-500 - latin_cyrillic */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        src: url('${EotMedium}'); /* IE9 Compat Modes */
        src: local(''), url('${EotMedium}?#iefix') format('embedded-opentype'),
            /* IE6-IE8 */ url('${Woff2Medium}') format('woff2'),
            /* Super Modern Browsers */ url('${WoffMedium}') format('woff'),
            /* Modern Browsers */ url('${TtfMedium}') format('truetype'),
            /* Safari, Android, iOS */ url('${SvgMedium}#Montserrat')
                format('svg'); /* Legacy iOS */
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        height: 100vh;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        background: ${theme.colors.mainBackground};
        min-height: 100vh;

        font-style: normal;
        height: 100%;
    }

    #root {
        height: 100vh;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
