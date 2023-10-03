import User from "./user";
import UserClass from "./UserClass";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h1>Abb</h1>
      <h2>This is About Page.</h2>
      <User name={"Rishav kumar (func)"} />
      <UserClass name={"Rishav"} />
    </div>
  );
};

export default About;
