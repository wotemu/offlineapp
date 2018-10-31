import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../img/facebook.jpg";
import Youtube from "../img/youtube.jpg";
import Instagram from "../img/instagram.jpg";
import Twitter from "../img/twitter.jpg";

const FooterLinks = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <div className="footerPadding">
      <div className="row ">
        <div className="col-lg-2">
          <Link className="link" to="/registeration">
            How it works
          </Link>
        </div>
        <div className="col-lg-2">
          <Link className="link" to="/registeration">
            Privacy Policy
          </Link>
        </div>
        <div className="col-lg-2">
          <Link className="link" to="/registeration">
            Terms of use
          </Link>
        </div>
        <div className="col-lg-2">
          <Link className="link" to="/registeration">
            Contact
          </Link>
        </div>

        <div className="col-lg-4 colfooter social">
          <ul className="float-right">
            <li className="left-link">
              <a href="https://www.facebook.com/" className="link">
                <img src={Facebook} alt="" />
              </a>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                <img src={Twitter} alt="" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                <img src={Instagram} alt="" />
              </Link>
            </li>
            <li className="left-link">
              <a
                href="https://www.youtube.com/watch?v=jrCRQUk0naw"
                className="link"
              >
                <img src={Youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 copy-right">
          <p>&copy; {new Date().getFullYear()} tourGuide</p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterLinks;

/* 
const FooterLinks = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <div className="footerPadding">
      <div className="row ">
        <div className="col-lg-6 colfooter">
          <ul className="float-left">
            <li className="left-link">
              <Link className="link" to="/registeration">
                How it works
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                Privacy Policy
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                Terms of use
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 colfooter social">
          <ul className="float-right">
            <li className="left-link">
              <Link className="link" to="/registeration">
                <img src={Facebook} alt="" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                <img src={Twitter} alt="" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                <img src={Instagram} alt="" />
              </Link>
            </li>
            <li className="left-link">
              <Link className="link" to="/registeration">
                <img src={Youtube} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 copy-right">
          <p>&copy; {new Date().getFullYear()} tourGuide</p>
        </div>
      </div>
    </div>
  </footer>
); */
