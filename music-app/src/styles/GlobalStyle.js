import { createGlobalStyle } from "styled-components";
import StratosSkyeng from "../assets/fonts/stratosskyengweb-regular.woff2"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "StratosSkyeng";
    src: url(${StratosSkyeng});
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }

  input[type="range"] {
    width: 109px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    border-radius: 10px/100%;
    height: 2px;
    background-color: #fff;
  }
  input[type="range"]::-webkit-slider-thumb {
    background: #1A1A1A;
    border: 2px solid #FFFFFF;
    border-radius: 10px/100%;
    cursor: pointer;
    width: 12px;
    height: 12px;
    -webkit-appearance: none;
    margin-top: -5px;
    
  }
  
  input[type="range"]::-moz-range-track {
    border-radius: 10px/100%;
    height: 2px;
    background-color: #fff;
  }
  input[type="range"]::-moz-range-thumb {
    background: #1A1A1A;
    border: 2px solid #FFFFFF;
    border-radius: 10px/100%;
    cursor: pointer;
  }
`;

export { GlobalStyle };
