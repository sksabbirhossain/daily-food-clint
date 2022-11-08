import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Slider from "../components/Slider/Slider";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import aboutImg from "../images/aboutus/about.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Slider />
      {/* our services */}
      <section className="mt-4 mt-md-5 ">
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
            <Link to="/" className="mainBtn">
              {" "}
              See All <FaArrowRight />{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="mt-4 mt-md-5 mb-5">
        <div className="container">
          <h2>about us</h2>
          <div className="aboutUs mt-4">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex flex-column h-100 ps-4 justify-content-center align-items-start">
                  <h3>About Services</h3>
                  <p className="praText ">
                    I am Sabbir. I am providing food dalivery services. I cook
                    all my food at my home. I try to keep my diet very good . i
                    also deliver the ordered food the order's home. and i didn't
                    charge extra for that.
                  </p>
                  <SocialIcons />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img src={aboutImg} className="img-fluid rounded" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
