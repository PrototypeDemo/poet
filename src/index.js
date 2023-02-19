// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import ScrollToTop from "./ScrollToTop";

// ReactDOM.render(
//   <BrowserRouter>
//      <ScrollToTop />
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);