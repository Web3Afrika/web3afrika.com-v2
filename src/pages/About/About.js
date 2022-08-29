import styles from "./About.module.scss";

import Footer from "./../../components/Footer/Footer";
import discordIcon from "./../../assets/images/icons/icon-discord.svg";
import partner1 from "./../../assets/partners/partner_1.svg";
import { Banner, LinkBtn } from "../../components/Utils/Utils";

function About() {
  return (
    <div className={styles.About}>
      <div className="container">
        <h1>Largest community of web3 builders in Africa</h1>
        <div className={styles.AboutButtons}>
          <LinkBtn
            title="Sponsor US"
            url="http://discord.gg/YMJ49PDTym"
            color="red"
            bordered={true}
          />
          <LinkBtn
            title="Join Us"
            url="http://discord.gg/YMJ49PDTym"
            color="green"
            icon="discord"
            bordered={true}
          />
        </div>
        <section>
          <h2>GOAL</h2>
          <p>
            Onboard, Educate & Support Web3 Builders, Foster & Build Web3 Tools
            & Public Goods
          </p>
        </section>
        <section>
          <h2>Mission</h2>
          <p>
            Web3 Afrika exists to accelerate the education and opportunities of
            a new wave of builders and bring diversity into web3 conversations
            globally by fostering communities in Africa, Africans in diaspora,
            and persons of African descent from across the world.
          </p>
        </section>
        <section>
          <h2>VISION</h2>
          <ul>
            <li>Access to education, funding, community, networks</li>
            <li>
              Transparency: open source everything, conversations in public,
              document and shared journey
            </li>
            <li>Diversity and Inclusion</li>
            <li>Responsibility</li>
          </ul>
        </section>
      </div>

      <div style={{ margin: "4em 0" }}>
        <Banner />
      </div>
      <div className="container">
        <section className={styles.Partners}>
          <h2>Partners</h2>
          <div className={styles.PartnersLogo}>
            <img src={partner1} alt="developer_dao partner" />
            <img src={partner1} alt="developer_dao partner" />
            <img src={partner1} alt="developer_dao partner" />
            <img src={partner1} alt="developer_dao partner" />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default About;
