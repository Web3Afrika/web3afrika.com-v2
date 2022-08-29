import { Socials } from "../Utils/Utils";
import styles from "./Footer.module.scss";

function Footer() {


  return (
    <div className={styles.Footer}>
      <div className={styles.Social}>
        <Socials />
      </div>
      <div className="hr"></div>
      <span>&copy; {(new Date).getFullYear()} Web3Afrika. All Rights Reserved</span>
    </div>
  );
}

export default Footer;
