import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/MyReviews.module.css";
import { dynamicTitle } from "../utilities/dynamicTitle";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(true);
  const { currentUser, logOut } = useAuth();
  const id = currentUser.uid;
  useEffect(() => {
    fetch(`http://localhost:5000/api/my-reviews/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, reload]);

  // delete review
  const deleteReview = (rid) => {
    fetch(
      `http://localhost:5000/api/my-review/delete/${rid}?email=${currentUser?.email}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setReload(!reload);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // add title
  dynamicTitle("My reviews");

  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>my reviews</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            {reviews.length > 0 ? (
              <>
                <div className="col-12">
                  {reviews.map((review) => (
                    <>
                      {" "}
                      <div key={review._id}>
                        <div className="card py-2 px-3 mb-2 ">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="mb-0 pb-1">
                                {review.service_name}
                              </h5>
                              <p className="mb-0">{review.review}</p>
                            </div>
                            <div className="">
                              <span className="text-danger me-3 fs-5">
                                <Link onClick={() => deleteReview(review._id)}>
                                  <FaTrash />
                                </Link>
                              </span>
                              <span className="text-success fs-5">
                                <Link to={`/my-review/update/${review._id}`}>
                                  <FaPencilAlt />
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="col-12">
                  <div className={styles.message}>
                    <p>No reviews were added'</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReviews;
