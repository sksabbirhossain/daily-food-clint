import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      {/* our services */}
      <section className="mt-4 mt-md-5 mb-5">
        <div className="container">
          <h2>our Services</h2>
          <div className="card-items mt-4">
            <div className="row">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
          <div className="text-center">
            <Link to="/" className="mainBtn">  See All <FaArrowRight /> </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
