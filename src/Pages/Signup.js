import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import FormInput from "../components/FormInput/FormInput";
import Spinner from "../components/Spinner/Spinner";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Signup.module.css";
import { dynamicTitle } from "../utilities/dynamicTitle";

const Signup = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [photourl, setPhotourl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { userSignup, googleSignin } = useAuth();
  const navigate = useNavigate();

  // form handle and signup function
  const handleUserSignup = (e) => {
    setLoading(true);
    e.preventDefault();
    //   validation
    if (password !== confirmPassword) {
      setLoading(false);
      return setError("password not match");
    }
    userSignup(email, password, username, photourl)
      .then((userInfo) => {
        const user = userInfo.user;
        console.log(user);
        //get jwt token
        fetch("https://daily-food-server.vercel.app/api/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
        toast.success("User Create Successfull");

        // update profile
        updateProfile(user, {
          displayName: username,
          photoURL: photourl,
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(error.message);
      });
  };

  if (loading) {
    return <Spinner />;
  }
  // google signup function
  const handleGoogleSignup = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        //get jwt token
        fetch("https://daily-food-server.vercel.app/api/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
        toast.success("Google SignUp successful");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // add title
  dynamicTitle("Signup page");

  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>SignUP</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card p-3 mb-4 shadow">
                <Form onSubmit={handleUserSignup}>
                  <FormInput
                    label="User Name"
                    type="text"
                    name="name"
                    placeholder="user name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <FormInput
                    label="User Email"
                    type="email"
                    name="email"
                    placeholder="user email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <FormInput
                    label="Photo URL"
                    type="text"
                    name="image"
                    placeholder="photo url"
                    value={photourl}
                    onChange={(e) => setPhotourl(e.target.value)}
                  />
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <FormInput
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    placeholder="comfirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <p className="text-danger fw-bold">{error}</p>
                  <Button className="mt-2">
                    Signup <FaArrowRight />{" "}
                  </Button>
                </Form>
                <span className="py-2 text-center">OR</span>
                <div className="shadow py-3 text-center rounded">
                  <span
                    onClick={handleGoogleSignup}
                    className={styles.signupIcons}
                  >
                    Signup With Google
                  </span>
                </div>
                <p className="mt-2">
                  <small>
                    You have already an account
                    <Link to="/login">
                      {" "}
                      <small className="text-success">please login</small>{" "}
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
