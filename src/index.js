// Import libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Access root element
const el = document.getElementById('root');

// use reactDom
const root = ReactDOM.createRoot(el);

//use component
root.render(<App />)
