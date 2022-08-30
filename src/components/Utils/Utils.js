import styles from "./Utils.module.scss";
import discordIcon from "./../../assets/images/icons/icon-discord.svg";
import banner from "./../../assets/images/banner.svg";

import bloggerIcon from "./../../assets/images/icons/icon-blogger.svg";
import twitterIcon from "./../../assets/images/icons/icon-twitter.svg";
import githubIcon from "./../../assets/images/icons/icon-github.svg";
import instagramIcon from "./../../assets/images/icons/icon-instagram.svg";
import tiktokIcon from "./../../assets/images/icons/icon-tiktok.svg";
import redditIcon from "./../../assets/images/icons/icon-reddit.svg";
import youtubeIcon from "./../../assets/images/icons/icon-youtube.svg";

export function Socials() {
  return (
    <div className={styles.Socials}>
      <div>
        <a
          target="_blank"
          href="https://twitter.com/web3afrika"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Web3Afrika"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="github icon" />
        </a>
        <a target="_blank" href="https://blog.web3afrika.com" rel="noreferrer">
          <img src={bloggerIcon} alt="blogger icon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/web3afrika"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="insragram icon" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.tiktok.com/@web3afrika"
          rel="noreferrer"
        >
          <img src={tiktokIcon} alt="tiktok icon" />
        </a>
        <a
          target="_blank"
          href="https://www.reddit.com/user/Web3Afrika"
          rel="noreferrer"
        >
          <img src={redditIcon} alt="reddit icon" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCr5IiYZ4zUD3k9Cq80TBMkg"
          rel="noreferrer"
        >
          <img src={youtubeIcon} alt="youtube icon" />
        </a>
      </div>
    </div>
  );
}

export function Banner() {
  return <img className={styles.Banner} src={banner} alt="banner" />;
}

export function LinkBtn({ title, url, icon, color, bordered }) {
  return (
    <a
      className={[
        styles.LinkBtn,
        color === "green" ? styles.LinkBtnGreen : "",
      ].join(" ")}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {title} {!!icon && <img src={discordIcon} alt="discordIcon" />}
    </a>
  );
}
