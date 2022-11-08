import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, image, title, price, description } = service;
  return (
    <div className="col-md-4">
      <div className="card mb-2 mb-sm-4">
        <img
          src={image}
          className="img-fluid"
          alt="card-img"
        />
        <div className="card-body">
          <h5 className="card-title">{title }</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text"><span className="fw-bold">Price:</span> {price} tk.</p>
          <Link to={`/services/${_id} `} className="btn mainBtn">
          view details <FaArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
