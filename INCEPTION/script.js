import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "child heading 💕💕"),
    React.createElement("h2", {}, "child  2 heading"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "child heading"),
    React.createElement("h2", {}, "child  4  heading"),
  ])
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
