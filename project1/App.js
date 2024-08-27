import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "NAMASTE REACT🚀🚀"
);

// Render to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
