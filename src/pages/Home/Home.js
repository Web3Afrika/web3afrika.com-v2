import { Banner, LinkBtn, Socials } from "./../../components/Utils/Utils";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <div className="container">
        <h1>Supporting Web3 Builders in Africa</h1>
        <div className={styles.HomeBtn}>
          <LinkBtn
            title="Join our community"
            url="http://discord.gg/YMJ49PDTym"
            color="red"
            icon="discord"
            bordered={true}
          />
        </div>
        <div className={styles.Social}>
          <Socials />
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default Home;
