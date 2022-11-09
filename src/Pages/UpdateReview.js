import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import { useAuth } from "../contexts/AuthContext";
import { dynamicTitle } from "../utilities/dynamicTitle";

const UpdateReview = () => {
  const [reviews, setReviews] = useState("");
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/my-review/update/${id}?email=${currentUser?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut()
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setReviews(data.data);
      });
  }, [id,currentUser?.email, logOut]);

  // update review
  const handleReviewUpdate = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:5000/api/my-review/update/${id}?email=${currentUser?.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          review: reviews,
        }),
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut()
        }
        return res.json();
      })
      .then((data) => {
        e.target.reset();
        navigate("/my-reviews");
        toast.success(data.message);
      })
      .catch((err) => {
        toast.error("Something worng try again");
      });
  };

  // add title
  dynamicTitle("Update review");

  return (
    <section className="mt-3 mb-3">
      <div className="container">
        <div className="shadow py-3 rounded">
          <h2> Update Review</h2>
        </div>
        <div>
          <Form onSubmit={handleReviewUpdate}>
            <textarea
              className="form-control my-2"
              rows="4"
              type="text"
              name="review"
              placeholder="write your review here"
              value={reviews.review}
              onChange={(e) => setReviews(e.target.value)}
              required
            >
              {reviews.review}
            </textarea>
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
