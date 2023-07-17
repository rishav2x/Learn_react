import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = () => (
<h1>Nameste </h1>
);
//React Functional Component --- React composite Component
const HeadingComponent = () => (
    <div id="container">
      <Title />
<h1 className="heading">Nameste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);