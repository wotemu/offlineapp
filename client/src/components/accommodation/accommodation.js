import React from "react";
import image1 from "../MerchantPage/image/haile.jpg";
import image2 from "../MerchantPage/image/lodge.jpg";
import image3 from "../MerchantPage/image/lodge2.jpg";
import SectionMap from "./SectionMap/SectionMap";
import SectionReadMore from "../MerchantPage/SectionReadMore";
import AccommodationReview from "./accommodationReview";
import HistoricalSites from "../historicalSites/historicalSites";
//import Posts from "./post/Post";
import List from "./list";

const aboutContent = ` Our resort offers high-end luxury in an Ethiopian paradise setting. Breathtaking landscapes encompass the resort as guests enjoy the natural wonders of Lake Kuriftu.

After taking in the natural beauty of the wildlife and countryside, our organic spa and gourmet restaurants are the perfect places to relax as you prepare to continue your getaway experience.
  `;

const about = (
  <div className="AboutBody">
    <span className="AboutContent">
      <SectionReadMore bio={aboutContent} />
    </span>
  </div>
);

const Accommodation = () => (
  <div className="container paddingTop">
    <div className="row">
      <div className="col-md-8 ">
        <h3 className="headerBackground">
          Welcome to Kuriftu Lodge, Bishoftu Ethiopia
        </h3>
        <img src={image1} alt="" className="ImagePaddingTop" />
        <AccommodationReview />
        <div className="comments">
          <div className="card">
            <div className="card-body">
              <List />
            </div>
          </div>
        </div>
        <div>
          <HistoricalSites />
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title headerBackground">
              Welcome to Kuriftu lodge
            </h5>
            <div className="card-text"> {about}</div>
            <a
              href="https://kurifturesorts.com/"
              className="btn btn-primary btn-block"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="" />
        </div>
        <div className="card">
          <img src={image3} alt="" className="haile" />
        </div>

        <div className="MapSection MapPaddingTop">
          <SectionMap />
        </div>
      </div>
    </div>
  </div>
);

export default Accommodation;
