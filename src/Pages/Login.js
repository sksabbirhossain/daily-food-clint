import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import FormInput from '../components/FormInput/FormInput';
import styles from "../styles/Login.module.css"

const Login = () => {
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
                <Form >
                  <FormInput label="User Email" type="email" name="email" placeholder="user email address" required/>
                  <FormInput label="Password" type="password" name="password" placeholder="password" required/>
                  <Button className="mt-2">Login <FaArrowRight/> </Button>
                </Form>
                <span className='py-2 text-center'>OR</span>
                <div className='shadow py-3 text-center rounded'>
                <span className={styles.loginIcons}>Login With Google</span>
                </div>
                <p className="mt-4">
                    <small>
                    You don't an account<Link to="/signup"> <small className='text-success'>Create here</small> </Link>
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