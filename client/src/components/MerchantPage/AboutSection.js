import React, { Component } from "react";
import "./MerchantPage.css";

import SectionMap from "./SectionMap/SectionMap";
import SectionReadMore from "./SectionReadMore";

const aboutContent =
  "TourGuide is your online destination for planning a tour holiday in Ethiopia. We offer an overview  booking options for tour guide services, car rentals and accommodation. TourGuide is your online destination for planning a tour holiday in Ethiopia. We offer an overview  booking options for tour guide services, car rentals and accommodation. TourGuide is your online destination for planning a tour holiday in Ethiopia. We offer an overview..";
const about = (
  <div className="AboutBody">
    <p className="AboutContent">
      <SectionReadMore bio={aboutContent} />
    </p>
  </div>
);

class AboutSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="AboutSectionContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="AboutSection">
                <div className="About">
                  <p className="AboutHeader">About Tour Guide</p>
                  {about}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="MapSection">
                <SectionMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
