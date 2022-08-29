import styles from "./About.module.scss";

import Footer from "./../../components/Footer/Footer";
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
            url="mailto:web3afrika@gmail.com"
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
            <li>Access: to provide access to our members that would not otherwise be available. Access to education, funding, community, networks</li>
            <li>
            Transparency: open source everything, conversations in public, document and shared journey
            </li>
            <li>Diversity and Inclusion: to truly build a safe space for our members regardless of their differences in age, ethnicity, gender, gender identity or expression, language differences, nationality or national origin, family or marital status, physical, mental and development abilities, race, religion or belief, sexual orientation, skin color, social or economic class, education, work and behavioral styles, political affiliation, military service, caste, and other characteristics that make our members unique</li>
            <li>Responsibility: as a self-governed community, we rely on members to be personally responsible for their actions and commitments to the community</li>
            <li>Kindness and Empathy: we know that we live in a complex, stressful, and diverse world and go out of our way to make people’s lives and days better through our interactions</li>
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
