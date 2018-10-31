import React from "react";
import SectionTop from "./SectionTop/SectionTop";
import SectionCenter from "./SectionCenter/SectionCenter";
import VideoPlayer from "./VideoPlayer";
import NewsSection from "./NewsSection";
import AboutSection from "./AboutSection";
import Carousel from "react-image-carousel";

import abiyata from "./image/abiyata.png";
import bale from "./image/bale.jpg";
import birds from "./image/birds.jpg";
import chelada from "./image/chelada.png";
import dalol from "./image/dalol.jpg";
import dz4 from "./image/dz4.jpg";
import ertale from "./image/ertale.png";
import fasil from "./image/fasil.jpg";
import hamdela from "./image/hamdela.jpg";
import lalibela from "./image/lalibela.jpg";
import meskel from "./image/meskel.png";
import omobeauty from "./image/omobeauty.jpg";
import omowow from "./image/omowow.jpg";
import zebra from "./image/zebra.png";

let images = [
  abiyata,
  bale,
  birds,
  chelada,
  dalol,
  dz4,
  ertale,
  fasil,
  hamdela,
  lalibela,
  meskel,
  omobeauty,
  omowow,
  zebra
];

export const MerchantPage = props => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="my-carousel">
            <Carousel
              images={images}
              thumb={true}
              loop={true}
              autoplay={4000}
              className="carousel"
            />
          </div>
        </div>
      </div>

      <SectionTop />
      <SectionCenter />
      <VideoPlayer />
      <NewsSection />
      <AboutSection />
    </div>
  );
};

export default MerchantPage;
