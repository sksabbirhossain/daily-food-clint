import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import FormInput from "../components/FormInput/FormInput";

const AddService = () => {
  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>add Service</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card p-3 mb-4 shadow">
                <Form >
                  <FormInput label="Title" type="text" name="title" placeholder="service name" required/>
                  <FormInput label="Photo URL" type="text" name="image" placeholder="service photo url" required/>
                  <FormInput label="Price" type="number" name="price" placeholder="price" required/>
                  <textarea name="description" className="form-control" rows="7" placeholder="description.." required></textarea>
                  <Button className="mt-2">Add <FaArrowRight/> </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
