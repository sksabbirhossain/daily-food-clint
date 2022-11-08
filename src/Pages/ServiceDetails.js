import React from "react";
import Review from "../components/Review/Review";
import aboutImg from "../images/aboutus/about.jpg";

const ServiceDetails = () => {
  return (
    <>
      <section className="mt-3 mb-3">
        <div className="container">
          <div className="shadow py-3 rounded">
            <h2> Service Details</h2>
          </div>
          <div className=" mt-4">
            <div className="row">
              <div className="col-md-6">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum recusandae, aspernatur quo atque quibusdam hic
                  beatae, est reprehenderit ipsum, perferendis in unde.
                  Accusantium architecto atque expedita quia iste molestiae,
                  officia iure fugit odio nisi maxime libero eum facere numquam
                  dolorum quisquam illo. Ad, quisquam! Iure quis cupiditate
                  omnis ab eum eligendi! Sapiente corporis autem dolores
                  repudiandae, accusantium minima officia ipsa magnam fugiat
                  rem. Soluta delectus aspernatur, dolorum blanditiis tenetur,
                  aut est repellendus ad nesciunt necessitatibus omnis ducimus
                  quasi! Natus sequi provident debitis ratione nisi, molestias
                  id, corrupti quaerat harum cumque est quidem fugiat magnam
                  facilis assumenda error quo nulla. Delectus sunt cumque
                  doloremque iusto quaerat magni, omnis unde recusandae suscipit
                  beatae obcaecati! Obcaecati quam dolorum esse mollitia ipsa
                  sequi eligendi voluptatem earum deleniti enim. Dolores
                  obcaecati, ipsa suscipit soluta quas recusandae doloribus
                  ratione molestiae architecto error praesentium alias!
                  Adipisci, amet fugit. Et nesciunt doloribus suscipit. Quis
                  explicabo tenetur delectus non nam modi aut quasi ullam
                  veniam, magnam recusandae consectetur aspernatur blanditiis
                  assumenda cupiditate facilis distinctio? Omnis itaque eaque,
                  fugit nemo quisquam natus assumenda voluptate animi ducimus,
                  excepturi ex sit. Voluptatibus recusandae laboriosam totam
                  aliquid consequuntur quos ipsa! Quas nam corrupti aut maiores.
                  Sit in ut modi libero et mollitia accusamus!
                </p>
              </div>
              <div className="col-md-6">
                <div>
                  <img src={aboutImg} className="img-fluid rounded" alt="" />
                  <div className="shadow mt-5 p-2 rounded ">
                    <h2>price: 100 taka</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
          {/* review section */}
      <Review />
    </>
  );
};

export default ServiceDetails;
