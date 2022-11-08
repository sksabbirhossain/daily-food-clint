import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useParams } from "react-router-dom";
import Review from "../components/Review/Review";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data.data);
      });
  }, [id]);
  return (
    <>
      <section className="mt-3 mb-3">
        <div className="container">
          <div className="shadow py-3 rounded">
            <h2> Service Details</h2>
          </div>
          <div className=" mt-4">
            <div className="row">
              <div className="col-md-6">
                <h4 className="fw-bold">{service.title}</h4>
                <p>{service.description}</p>
              </div>
              <div className="col-md-6">
                <div>
                  <PhotoProvider>
                    <PhotoView src={service.image}>
                      <img
                        src={service.image}
                        className="img-fluid rounded"
                        alt=""
                      />
                    </PhotoView>
                  </PhotoProvider>

                  <div className="shadow mt-5 p-2 rounded ">
                    <h2>price: {service.price} taka</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* review section */}
      <Review serviceName={service.title} />
    </>
  );
};

export default ServiceDetails;
