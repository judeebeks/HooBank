import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import './index.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
The browser sees the JSX syntax as objects and does not understand what to do with it. But with the ReactDOM, when we render the syntax to the ReactDOM the browser now understands the syntax and is able to convert it to HTML DOM element.

Why we need react defined in our react app is cause our JSX syntax is define in our react module.

when we console.log a jsx syntax we get a JavaScript object that shows what react will add to the HTML DOM

We need our JSX to be nested under a single parent element.

React components are functions that return react elements.
*/


