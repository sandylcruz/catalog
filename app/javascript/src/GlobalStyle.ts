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
body {
  background-color: #e5fbe5
  // background: linear-gradient( 102.7deg, rgba(253,218,255,1) 8.2%, rgba(223,173,252,1) 19.6%, rgba(173,205,252,1) 36.8%, rgba(173,252,244,1) 73.2%, rgba(202,248,208,1) 90.9% );
}

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
