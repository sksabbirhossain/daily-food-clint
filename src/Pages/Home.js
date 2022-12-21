import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Slider from "../components/Slider/Slider";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import aboutImg from "../images/aboutus/about.jpg";
import "../styles/Home.css";
import { dynamicTitle } from "../utilities/dynamicTitle";

const Home = () => {
  const [services, setServices] = useState([]);

  // get all services data
  useEffect(() => {
    fetch("https://daily-food-server.vercel.app/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.homeData);
      });
  }, []);

  // add title
  dynamicTitle("Home page");

  return (
    <>
      <Slider />
      {/* our services */}
      <section className="mt-4 mt-md-5 ">
        <div className="container">
          <h2>our Services</h2>
          <div className="card-items mt-4">
            <div className="row">
              {services?.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="mainBtn">
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
                  <h3 className="pt-3 pt-sm-0">About Services</h3>
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

      {/* subscription section */}
      <section className="subscription mb-5">
        <div className="container">
          <h2 className="subText">Subscribe to newsletter</h2>
          <div className="d-flex subInupt">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="form-control  w-full "
            />
            <input type="button" className="mainBtn ms-2" value="Subscribe" />
          </div>
        </div>
      </section>
      {/* contact serction */}
      <Contact />
    </>
  );
};

export default Home;
