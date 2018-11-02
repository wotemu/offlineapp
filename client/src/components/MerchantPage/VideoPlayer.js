import React, { Component } from "react";

//import { FormattedMessage } from "react-intl";
//import ReactPlayer from "react-player";
import SectionReadMore from "./SectionReadMore";
import videoplayback from "./videoplayback.mp4";
import "./MerchantPage.css";

const videoContent = `Timkat (also known as Timket) is an Orthodox Christian celebration of the Ethiopian Epiphany. It marks the baptism of Jesus Christ in the Jordan River.

  Pilgrims come from far and wide to take part in the festival and witness the re-enactment of the baptism. All over the country large crowds assemble as the religious festivities commence, with spectacular processions, song, dance and prayer.
  
  The festival lasts for three days and is at its most colourful in the capital, Addis Ababa, where everyone gets involved in the celebrations.
  
  When
  The festival takes place in Ethiopia every year on January 19th (or January 20th on leap years), starting with Ketera (preparations) the day before, and it lasts for three days.
  `;

class VideoPlayer extends Component {
  render() {
    return (
      <div className="container">
        <div className="PromotionBackground">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="VideoCenter">
                <div className="card">
                  <video width="400" controls>
                    <source src={videoplayback} type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <div className="cardBody">
                      <h4 className="card-title">
                        <span className="PromotionContent">
                          Ethiopian Epiphany
                        </span>
                      </h4>
                      <SectionReadMore bio={videoContent} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
