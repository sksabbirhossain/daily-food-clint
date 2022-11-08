import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="col-md-4">
      <div class="card mb-2 mb-sm-4">
        <img
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=1"
          class="img-fluid"
          alt="card-img"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text"><span className="fw-bold">Price:</span> 100 tk.</p>
          <Link to="/services/:id " class="btn mainBtn">
          view details <FaArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
