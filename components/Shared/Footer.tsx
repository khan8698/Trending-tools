/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from "react";

const AppFooter: FC = () => {
  return (
    <>
      {" "}
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <ul className="footer-list">
                <li>
                  <strong>INFO</strong>
                </li>
                <li>
                  <a href="#">Formats</a>
                </li>
                <li>
                  <a href="#">Compression</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <ul className="footer-list">
                <li>
                  <strong>POPULAR</strong>
                </li>
                <li>
                  <a href="#">ODT to PDF</a>
                </li>
                <li>
                  <a href="#">WMA to MP3</a>
                </li>
                <li>
                  <a href="#">CSV to XLS</a>
                </li>
                <li>
                  <a href="#">PDF to CSV</a>
                </li>
                <li>
                  <a href="#">EPUB to MOBI</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <ul className="footer-list">
                <li>
                  <strong>COMPANY</strong>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <ul className="footer-list">
                <li>
                  <strong>RESOURCES</strong>
                </li>
                <li>
                  <a href="#">Developer API</a>
                </li>
                <li>
                  <a href="#">Tools</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container">
          <p>
            &copy; 2022 <a href="">conversion</a>
          </p>
          <ul className="socialmedia">
            <li>
              <a href="#" className="icon-facebook-f"></a>
            </li>
            <li>
              <a href="#" className="icon-google-plus-g"></a>
            </li>
            <li>
              <a href="#" className="icon-pinterest-p"></a>
            </li>
            <li>
              <a href="#" className="icon-twitter"></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
