import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./utils/globalStyles.js";

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
