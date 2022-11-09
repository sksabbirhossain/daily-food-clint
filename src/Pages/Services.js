import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { dynamicTitle } from "../utilities/dynamicTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  // get all services data
  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      });
  }, []);

  // add title
  dynamicTitle("Services page");
  
  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>my Services</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
