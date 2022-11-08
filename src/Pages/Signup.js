import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import FormInput from '../components/FormInput/FormInput';
import styles from "../styles/Signup.module.css"

const Signup = () => {
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
                <Form >
                  <FormInput label="User Name" type="text" name="name" placeholder="user name" required/>
                  <FormInput label="User Email" type="email" name="email" placeholder="user email address" required/>
                  <FormInput label="Photo URL" type="text" name="image" placeholder="photo url" required/>
                  <FormInput label="Password" type="password" name="password" placeholder="password" required/>
                  <FormInput label="Confirm Password" type="password" name="cpassword" placeholder="comfirm password" required/>
                  <Button className="mt-2">Signup <FaArrowRight/> </Button>
                </Form>
                <span className='py-2 text-center'>OR</span>
                <div className='shadow py-3 text-center rounded'>
                <span className={styles.signupIcons}>Signup With Google</span>
                </div>
                <p className="mt-2">
                    <small>
                    You have already an account<Link to="/login"> <small className='text-success'>please login</small> </Link>
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