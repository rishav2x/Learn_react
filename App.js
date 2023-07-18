import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src="https://www.logodesign.net/logo/food-cloche-2836ld.png?nwm=1&nws=1&industry=food&sf="
            alt=""
            
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}

const AppLayout = () => {
    return (
        <div className ="app">
<Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);