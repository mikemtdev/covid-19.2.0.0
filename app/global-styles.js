import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .logo-covid {
    height:2em;
  }
  .green-bg {
    background-color:#8EB1AB;
}
.white-color {
  color:#F1F2ED;
}
.white-bg {
  background-color:#F1F2ED;
}
.margin-t-1 {
  margin-top:1em;
}
.margin-l-1 {
  margin-left:1em;
}
.padding-t-1 {
  padding-top:1em;
}
.padding-b-1 {
  padding-bottom:1em;
}
.padding-l-1 {
  padding-left:1em;
}
.padding-l-s5 {
  padding-left:0.5em;
}

.purple-bg {
  background-color:#1F1735;
}
.font-s-s9 {
  font-size:0.9em; 
}
.font-s-1{
  font-size:1.5em;
  
}
`;

export default GlobalStyle;
