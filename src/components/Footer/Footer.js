import React from "react";
import logo from "../../images/logo.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.footerContent}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footerContent py-3 d-flex flex-column justify-content-center align-items-center">
                <img src={logo} className="img-fluid" alt="" />
                <p className="text-center">
                  I am Sabbir. I am providing food dalivery services. <br /> I
                  cook all my food at my home. I try to keep my diet very good .{" "}
                  <br /> i also deliver the ordered food the order's home. and i
                  didn't charge extra for that.
                </p>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>Copyright © 2022 Daily Food. All rights reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
