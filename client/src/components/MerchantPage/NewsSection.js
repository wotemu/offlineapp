import React, { Component } from "react";
import SectionReadMore from "./SectionReadMore";
import "./MerchantPage.css";

const NewsContent = `Timkat (also known as Timket) is an Orthodox Christian celebration of the Ethiopian Epiphany. It marks the baptism of Jesus Christ in the Jordan River.

  Pilgrims come from far and wide to take part in the festival and witness the re-enactment of the baptism. All over the country large crowds assemble as the religious festivities commence, with spectacular processions, song, dance and prayer.
  
  The festival lasts for three days and is at its most colourful in the capital, Addis Ababa, where everyone gets involved in the celebrations.
  `;

const news = (
  <div className="NewsBody">
    <p className="NewsDate">Nov 1, 2018</p>
    <p className="NewsHeader">Timikat</p>
    <p className="NewsContent">
      <SectionReadMore bio={NewsContent} />
    </p>
  </div>
);

class NewsSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="MainContainer">
          <p className="MainHeader">News</p>
          <div className="row">
            <div className="col-md-4">{news}</div>
            <div className="col-md-4">{news}</div>
            <div className="col-md-4">{news}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsSection;
