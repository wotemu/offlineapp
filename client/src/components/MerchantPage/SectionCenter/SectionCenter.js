import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import "./SectionCenter.css";

import ImageOne from "./images/car.jpg";
import ImageTwo from "./images/bhc5.jpg";
import ImageThree from "./images/bhc6.jpg";
import ImageFour from "./images/bhc7.jpg";

const rentalsPage = (
  <Link to="/events">
    <img
      className="card-img-top"
      src={ImageOne}
      alt="bhcimage"
      style={{
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto"
      }}
    />
  </Link>
);

const guidedToursPage = (
  <Link to="/tour">
    <img
      className="card-img-top"
      src={ImageTwo}
      alt="bhcimage"
      style={{
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto"
      }}
    />
  </Link>
);

const accomodationPage = (
  <Link to="/accommodation">
    <img
      className="card-img-top"
      src={ImageThree}
      alt="bhcimage"
      style={{
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto"
      }}
    />
  </Link>
);

const eventsPage = (
  <Link to="/events">
    <img
      className="card-img-top"
      src={ImageFour}
      alt="bhcimage"
      style={{
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto"
      }}
    />
  </Link>
);

const SectionCenter = () => {
  return (
    <div className="container">
      <div className="CardPadding">
        <div className="row">
          <div className="col-md-3">
            <div className="colPadding">
              <div className="card">{rentalsPage}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="colPadding">
              <div className="card">{guidedToursPage}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="colPadding">
              <div className="card">{accomodationPage}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="colPadding">
              <div className="card">{eventsPage}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionCenter.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCenter.propTypes = {
  rootClassName: string,
  className: string
};

export default SectionCenter;
