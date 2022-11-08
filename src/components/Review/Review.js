import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

const Review = () => {
  const [review, setReview] = useState("");
  const [reload, setReload] = useState(true);
  const [getReviews, setGetReviews] = useState([]);
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
        setReload(!reload);
      })
      .catch((err) => {
        toast.error("Something worng try again");
      });
  };

  // get all review
  useEffect(() => {
    fetch(`http://localhost:5000/api/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setGetReviews(data.data);
      });
  }, [id, reload]);

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
        {getReviews.map((getReview) => (
          <>
            <div
              key={getReview._id}
              className="d-md-flex shadow py-2 mb-3 rounded ps-3 justify-content-start align-items-center"
            >
              <img
                src={
                  getReview.user_img !== null
                    ? getReview.user_img
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt=""
                className="pe-2 pb-2"
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              />
              <div>
                <h5 className="m-0 p-0">{getReview.user_name}</h5>
                <p className="m-0 p-0">{getReview.review}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Review;
