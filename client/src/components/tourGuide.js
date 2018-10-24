import React from "react";
import image1 from "./MerchantPage/image/semien.jpg";
import image2 from "./MerchantPage/image/semien2.jpg";
import image3 from "./MerchantPage/image/rasdejen.jpg";
import image4 from "./MerchantPage/image/rasdejen2.jpg";
import SectionMap from "./MerchantPage/SectionMap/SectionMap";
import SectionReadMore from "./MerchantPage/SectionReadMore";
import Posts from "../components/posts/Posts";

const aboutContent = ` Ras Dejen (alternatively Ras Dashan Ge'ez: ራስ ደጀን rās dejen or ራስ ዳሸን rās dashen, Amharic "head guard") is the highest mountain in Ethiopia and tenth highest mountain of Africa. Part of Simien Mountains National Park located in the Gondar, Amhara Region, it reaches an elevation of 4,550 metres (14,930 ft).[1] The more common form, "Ras Dashen" is a corruption of its Amharic name, "Ras Dejen", used by the system of the Ethiopian Mapping Authority (EMA) which means "the general who fights in front of the Emperor.
  `;

const about = (
  <div className="AboutBody">
    <span className="AboutContent">
      <SectionReadMore bio={aboutContent} />
    </span>
  </div>
);

const TourGuide = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 ">
        <h3>Welcome to Semien mountains</h3>
        <img src={image4} alt="" />
        <div className="comments">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Comments</h5>
              <Posts />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">About Semien mountains</h5>
            <div className="card-text"> {about}</div>
            <a
              href="https://en.wikipedia.org/wiki/Ras_Dashen"
              className="btn btn-primary btn-block"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <img src={image1} alt="" />
        </div>
        <div className="card">
          <img src={image2} alt="" />
        </div>
        <div className="card">
          <img src={image3} alt="" />
        </div>

        <div className="MapSection MapPaddingTop">
          <SectionMap />
        </div>
      </div>
    </div>
  </div>
);

export default TourGuide;
