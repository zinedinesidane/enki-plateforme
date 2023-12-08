import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary: #8a7efc;
  --color-primary-600:#0582CA;
  --color-primary-700: #072F60;
  
  --color-primary-900: #151948;
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #F6F7F9;
  --color-grey-100: #E9F2F7;
  --color-grey: #c3c3c3;
  --color-grey-200: #9E9E9E;
  --color-grey-300: #797979;
  --color-grey-800: #0000000f;
  --color-grey-900: #00000087;

  /* --color-green-light: #4fc3b0; */
  --color-green-light: #CDEDE8;
  --color-green: #3bbca7;
  --color-green-flash: #36DF1B;

  --color-orange: #f6cf5d;
  --color-orange-300: #FFA35A;
  --color-red: #EA1A1A;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  @media screen and(max-width:43.75em) {
    font-size: 56.25%;
  }
}

body {
  font-family: "Jost", sans-serif;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.45;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  /* hyphens: auto; */
}

img {
  max-width: 100%;
  height: auto;
  background-size: cover;
  font-style: italic;
  vertical-align: middle;
  background-repeat: no-repeat;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}







`;

export default GlobalStyles;
