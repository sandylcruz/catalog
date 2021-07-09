import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, span, div, h1, h2, h3, h4, p, a, label, link, img, ol, ul, li, header, footer {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical - align: baseline;
  font-family: 'helvetica neue';
}

// body {
//   background-color: #43AF9B;
// }

h1 {
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
}

h2 {
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
}
`;

export default GlobalStyle;
