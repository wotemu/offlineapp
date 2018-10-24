import React, { Component } from "react";
import ReviewRating from "./ReviewRating";
import "./SectionTop.css";

import lisak from "./images/lisak.jpg";
import lisak2 from "./images/lisak2.jpg";

class SectionTop extends Component {
  render() {
    return (
      <div className="container">
        <div className="proBack">
          <h1 className="highlights">Weekly packages</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="colMarginBottom">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={lisak}
                    alt="bhcimage"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "100%",
                      height: "auto"
                    }}
                  />
                  <div className="cardBody">
                    <div className="card-body">
                      <h4 className="card-title">
                        special Package
                        <span className="StartingFrom">starting from</span>
                      </h4>
                      <div className="card-text">
                        special week package
                        <span className="StartingFromCurrency">€250</span>
                      </div>
                      <ReviewRating />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="colMarginBottom">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={lisak2}
                    alt="bhcimage"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "100%",
                      height: "auto"
                    }}
                  />
                  <div className="cardBody">
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        special package
                        <span className="StartingFrom">starting from</span>
                      </h4>
                      <div className="card-text">
                        special week package
                        <span className="StartingFromCurrency">€250</span>
                      </div>
                      <ReviewRating />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SectionTop.defaultProps = {
  rootClassName: null,
  className: null,
  reviews: []
};

export default SectionTop;
