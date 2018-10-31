import React from "react";
import image4 from "../MerchantPage/SectionCenter/images/image4.jpg";
import SectionMap from "./SectionMap/SectionMap";
import SectionReadMore from "../MerchantPage/SectionReadMore";
import Posts from "../posts/Posts";

const aboutContent = ` A monolithic church or rock-hewn church is a church made from a single block of stone. Because freestanding rocks of sufficient size are rare, such edifices are usually hewn into the ground or into the side of a hill or mountain. They can be of comparable architectural complexity to constructed buildings. The term monolithic church is most often used to refer to the complex of eleven churches in Lalibela, Ethiopia, believed to have been created in the 12th century.
  A monolithic church or rock-hewn church is a church made from a single block of stone. Because freestanding rocks of sufficient size are rare, such edifices are usually hewn into the ground or into the side of a hill or mountain. They can be of comparable architectural complexity to constructed buildings. The term monolithic church is most often used to refer to the complex of eleven churches in Lalibela, Ethiopia, believed to have been created in the 12th century.
  `;

const about = (
  <div className="AboutBody">
    <span className="AboutContent">
      <SectionReadMore bio={aboutContent} />
    </span>
  </div>
);

const Events = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 ">
        <h3 className="headerBackground">
          Welcome to Rock hewan church, Lalibela
        </h3>
        <img src={image4} alt="" className="ImagePaddingTop" />
        <div className="comments">
          <div className="card">
            <div className="card-body">
              <Posts />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title headerBackground">
              About Rock hewan church
            </h5>
            <div className="card-text"> {about}</div>
            <a
              href="https://en.wikipedia.org/wiki/Monolithic_church"
              className="btn btn-primary btn-block"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="MapSection MapPaddingTop">
          <SectionMap />
        </div>
      </div>
    </div>
  </div>
);

export default Events;
