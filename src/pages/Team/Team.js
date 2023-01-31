import { useEffect, useState } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Footer from "./../../components/Footer/Footer";
import { Banner } from "../../components/Utils/Utils";

// Import Swiper styles
import "swiper/css";
import "./swiper.scss";

import styles from "./Team.module.scss";

import founder from "./../../assets/images/team/founder.png";
import zara from "./../../assets/images/team/zara.png";
import tonyElondo from "./../../assets/images/team/elondo.png";
import Ajoke from './../../assets/images/team/ajoke.jpeg'
import Jennie from "./../../assets/images/team/jennie.jpeg";
import tonyKip from "./../../assets/images/team/tony.jpeg"

function Team() {
  const [sliderPreview, setSliderPreview] = useState(3.5);
  const [team] = useState([
    {
      name: "Idris",
      profileImage: founder,
      position: "Developer Relation Engineer",
    },
    {
      name: "Ajoke",
      profileImage: Ajoke,
      position: "Developer Relation Engineer",
    },
    {
      name: "Zara",
      profileImage: zara,
      position: "Design Lead",
    },
    {
      name: "Tonye",
      profileImage: tonyElondo,
      position: "Partnerships & Sponsorship",
    },
    {
      name: "Jennie",
      profileImage: Jennie,
      position: "Developer Relation Engineer",
    },
    {
      name: "Tony",
      profileImage: tonyKip,
      position: "Developer Relation Engineer",
    }
  ]);

  useEffect(() => {
    if (window.innerWidth <= 768) setSliderPreview(1.3);
  }, []);

  return (
    <div className={styles.Team}>
      <div className={styles.TeamContainer}>
        <h1>Our Team</h1>

        <Swiper
          slidesPerView={sliderPreview}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {team.map((teamMember, index) => (
            <SwiperSlide key={index}>
              <img
                src={teamMember.profileImage}
                alt={teamMember.name + " - " + teamMember.position}
              />
              <div>
                <span>{teamMember.name}</span>
                <span>{teamMember.position}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.TeamBanner}>
        <Banner />
      </div>
      <div className={styles.TeamFooter}>
        <Footer />
      </div>
    </div>
  );
}

export default Team;
