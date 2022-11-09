import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import FormInput from "../components/FormInput/FormInput";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Login.module.css";
import { dynamicTitle } from "../utilities/dynamicTitle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { userLogin, googleSignin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // login user
  const handleUserLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((userInfo) => {
        const user = userInfo.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // google signup function
  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Google SignUp successful");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // add title
  dynamicTitle("Login page");

  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>Login</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card p-3 mb-4 shadow">
                <Form onSubmit={handleUserLogin}>
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
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <p className="text-danger fw-bold">{error}</p>

                  <Button className="mt-2">
                    Login <FaArrowRight />{" "}
                  </Button>
                </Form>
                <span className="py-2 text-center">OR</span>
                <div className="shadow py-3 text-center rounded">
                  <span
                    onClick={handleGoogleSignIn}
                    className={styles.loginIcons}
                  >
                    Login With Google
                  </span>
                </div>
                <p className="mt-4">
                  <small>
                    You don't an account
                    <Link to="/signup">
                      {" "}
                      <small className="text-success">Create here</small>{" "}
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

export default Login;
