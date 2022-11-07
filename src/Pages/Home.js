import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Slider from "../components/Slider/Slider";
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
                <div className="d-flex h-100 align-items-center">
                  <p className="praText ps-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Velit quibusdam, nisi porro vero nostrum corporis delectus.
                    Corrupti molestias beatae dignissimos, delectus dolor
                    mollitia, architecto est repellat eaque quis debitis officia
                    nihil cum modi perferendis nesciunt? Quis nobis, quos
                    laudantium, consequatur
                  </p>
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
