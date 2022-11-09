import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";

const UpdateReview = () => {
  const [review, setReview] = useState("");
    const [update, setUpdate] = useState("");
    const { id } = useParams();

  const handleReviewUpdate = () => {};
  return (
    <section className="mt-3 mb-3">
      <div className="container">
        <div className="shadow py-3 rounded">
          <h2> Service Details</h2>
        </div>
        <div>
          <Form onSubmit={handleReviewUpdate}>
            <textarea
              className="form-control my-2"
              rows="4"
              type="text"
              name="review"
              placeholder="write your review here"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <Button>
              Update review <FaArrowRight />
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default UpdateReview;
