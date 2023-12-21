import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './index.css'; // Optional: Import your global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);