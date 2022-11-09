import React from "react";

const Blog = () => {
  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 mb-3 ">
          <h2>My Blogs</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2">
              <div className="shadow-lg p-3 mb-3 rounded">
                <h2 className="text-start fs-6">
                  01. What is Difference between SQL and NoSQL ?
                </h2>
                <p className="mb-0">
                  SQL databases are vertically scalable, while NoSQL databases
                  are horizontally scalable. SQL databases are table-based,
                  while NoSQL databases are document, key-value, graph, or
                  wide-column stores. SQL databases are better for multi-row
                  transactions, while NoSQL is better for unstructured data like
                  documents or JSON.
                </p>
              </div>
              <div className="shadow-lg p-3 mb-3 rounded">
                <h2 className="text-start fs-6">
                  02. What is JWT, and how does it work ?
                </h2>
                <p className="mb-0">
                  JSON Web Token (JWT) is an open standard for securely
                  transmitting information between parties as JSON object. It is
                  compact, readable and digitally signed using a private key/ or
                  a public key pair by the Identity Provider(IdP).
                  <p>
                    Authentication server verifies the credentials and issues a
                    jwt signed using either a secret salt or a private key.
                    User's Client uses the JWT to access protected resources by
                    passing the JWT in HTTP Authorization header. Resource
                    server then verifies the authenticity of the token using the
                    secret salt/ public key.
                  </p>
                </p>
              </div>
              <div className="shadow-lg p-3 mb-3 rounded">
                <h2 className="text-start fs-6">
                  03. What is the difference between javascript and NodeJS?
                </h2>
                <p className="mb-0">
                  Javascript is a Scripting language. It is mostly abbreviated
                  as JS. It can be said that Javascript is the updated version
                  of the ECMA script. Javascript is a high-level programming
                  language that uses the concept of Oops but it is based on
                  prototype inheritance.
                </p>
                <br />
                <p>
                  NodeJS is a cross-platform and opensource Javascript runtime
                  environment that allows the javascript to be run on the
                  server-side. Nodejs allows Javascript code to run outside the
                  browser. Nodejs comes with a lot of modules and mostly used in
                  web development.
                </p>
              </div>
              <div className="shadow-lg p-3 mb-3 rounded">
                <h2 className="text-start fs-6">
                  04. How does NodeJS handle multiple requests at the same time?
                </h2>
                <p className="mb-0">
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
