import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <div className="footerPadding">
      <div className="row ">
        <div className="col-lg-6 colfooter">
          <ul className="float-left">
            <li className="left-link">
              <Link className="link" to="/rentals">
                How it works
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/rentals">
                Privacy Policy
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/rentals">
                Terms of use
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/rentals">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 colfooter social">
          <ul className="float-right">
            <li className="left-link">
              <Link className="link" to="/rentals">
                <i className="fa fa-instagram" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/rentals">
                <i className="fa fa-twitter" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/rentals">
                <i className="fa fa-youtube-play" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/rentals">
                <i className="fa fa-facebook" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 copy-right">
          <p>&copy; {new Date().getFullYear()} VisitEthiopia</p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterLinks;
