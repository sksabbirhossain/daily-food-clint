import React from "react";
import { dynamicTitle } from "../utilities/dynamicTitle";

const About = () => {
  // add title
  dynamicTitle("About Page");

  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 mb-3 ">
          <h2>About</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
