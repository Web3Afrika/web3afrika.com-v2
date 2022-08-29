import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/icons/logo.svg";

import styles from "./Navbar.module.scss";

function Navbar({ navVisibility, setNavVisibility }) {
  useEffect(() => {
    if (navVisibility) {
      window.onscroll = () => window.scroll(0, 0);
    } else {
      window.onscroll = () => {};
    }
  }, [navVisibility]);

  return (
    <div className={styles.MainNav}>
      <h2>
        <Link to={"/"}>
          <img src={logo} alt="web3afrika logo" />
        </Link>
      </h2>
      <ul className={navVisibility ? styles.visibleNav : styles.inVisibleNav}>
        <li>
          <Link className="link" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={"/whitepaper"}>
            Whitepaper
          </Link>
        </li>
        <li>
          <Link className="link" to={"/team"}>
            Team
          </Link>
        </li>
        <li>
          <Link className="link" to={"/donate"}>
            Donate
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact-us"}>
            ContactUs
          </Link>{" "}
        </li>
      </ul>
      <div className={styles.connect}>
        <button>
          <span>Join Us</span>
        </button>
        <span>
          <Link className="link" to={"/contact-us"}>
            Contact Us
          </Link>
        </span>
      </div>

      <div className={styles.hamburger}>
        <span
          type="checkbox"
          tabIndex="-1"
          id="checkbox"
          className={[
            styles.hamburger_check,
            navVisibility ? styles.hamburger_check_checked : "",
          ].join(" ")}
        ></span>
        <div
          className={styles.Checkbox}
          onClick={() => setNavVisibility((visibility) => !visibility)}
        >
          <span className={styles.hamburger_bars}></span>
          <span className={styles.hamburger_bars}></span>
          <span className={styles.hamburger_bars}></span>
          <span className={styles.hamburger_bars}></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
