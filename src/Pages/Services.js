import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { dynamicTitle } from "../utilities/dynamicTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  // get all services data
  useEffect(() => {
    fetch("https://daily-food-server.vercel.app/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      })
      .catch((err) => {
        toast.error(err.message);
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
