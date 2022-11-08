import React from "react";
import ServiceCard from "../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>our Services</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
