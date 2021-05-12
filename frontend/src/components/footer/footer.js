import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2021 . All rights reserved. Created by
                  <a
                    href="https://www.linkedin.com/in/han-myat-thu-879046182/"
                    target="_blank"
                  >
                    Draz
                  </a>
                </p>
              </div>

              <div className="go_top">
                <a href="#top">
                  <i className="fas fa-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
