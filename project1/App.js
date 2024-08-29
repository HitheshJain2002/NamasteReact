import React from "react";
import ReactDOM from "react-dom/client";

const elements=<span>hello world gg oggg hithnesh</span>;
// React Element
const Title = (
    
   <h1 className="head"> {elements}title </h1>
);
// Render to the root element

//jsx

const number=1000;

//react  functionalcomponent
const HeadComponent = () => (
    <div id="container">
     {Title}
      <h2>{number}</h2>
      <h1 className="heading">hello world using functionalcomponent</h1>
    </div>
  );
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent />);
 
