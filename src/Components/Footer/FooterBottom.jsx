import React from "react";
import Payment from "../../Images/payment.png"

const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="widget-copyright">
                COPYRIGHT © 2016 <a href="#">ROADTHEMES.COM</a> ALL RIGHTS
                RESERVED{" "}
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <div className="widget-payment">
                <img
                  src={Payment}
                  alt="payment"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
