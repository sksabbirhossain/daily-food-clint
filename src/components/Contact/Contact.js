import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

const Contact = () => {
  return (
    <section className="mt-4 mt-md-5 mb-5">
      <div className="container">
        <h2>Contact us</h2>
        <div className="aboutUs mt-4">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src="https://imgix.theurbanlist.com/content/article/BBBBBBB.png?auto=format,compress&w=520&h=390&fit=crop" className="img-fluid rounded" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3">
                <Form>
                  <FormInput
                    label="Your Name"
                    pype="text"
                    placeholder="your name here"
                  />
                  <FormInput
                    label="Your Email"
                    pype="email"
                    placeholder="your email address"
                  />
                  <div className="mb-1">
                    <label htmlFor="">Your Message</label>
                  </div>
                  <textarea
                    name="desc"
                    className="form-control"
                    cols="30"
                    rows="4"
                    placeholder="write your messages"
                  ></textarea>
                  <div className="d-flex justify-content-center">
                    <Button className="mt-1 w-25">
                      Send <span className="d-none d-lg-inline-block"><FaArrowRight /></span>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
