import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const MyReviews = () => {
  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>my reviews</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="card py-2 px-3 mb-2 ">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-0 pb-1">title</h5>
                      <p className="mb-0">review</p>
                    </div>
                    <div className="">
                      <span className="text-danger me-3 fs-5">
                        <FaTrash />
                      </span>
                      <span className="text-success fs-5">
                        <FaPencilAlt />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReviews;
