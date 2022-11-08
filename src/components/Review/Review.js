import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

const Review = () => {
  const [review, setReview] = useState("");
  const { currentUser } = useAuth();
  const { id } = useParams();

  // handle review
  const handleReview = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        service_id: id,
        user_id: currentUser.uid,
        user_name: currentUser.displayName,
        user_img: currentUser.photoURL,
        review: review,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review Added successful");
      })
      .catch((err) => {
        toast.error("Something worng try again");
      });
  };
  return (
    <div>
      {/* review sections */}
      <div className="container">
        <div className="shadow py-3 rounded">
          <h2> Review section</h2>
        </div>
        {/* add review */}
        <div className="mb-2">
          <Form onSubmit={handleReview}>
            <FormInput
              type="text"
              name="review"
              placeholder="write your review here"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
            <Button>
              Add review <FaArrowRight />
            </Button>
          </Form>
        </div>

        {/* all reviews */}
        <div className="d-md-flex shadow py-2 mb-3 rounded ps-3 justify-content-center align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            className="pe-2 pb-2"
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          />
          <div>
            <h5 className="m-0 p-0">sk sabbir hossain</h5>
            <p className="m-0 p-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate ea quasi eligendi. Consequuntur earum, deleniti officia
              quaerat cupiditate suscipit voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
