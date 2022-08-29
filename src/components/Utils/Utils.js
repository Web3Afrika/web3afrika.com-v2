import styles from "./Utils.module.scss";
import discordIcon from "./../../assets/images/icons/icon-discord.svg";
import banner from "./../../assets/images/banner.svg";

export function Socials() {
  return (
    <div className={styles.Socials}>
      <a target="_blank" href="https://www.web3afrika.com/" rel="noreferrer">
      </a>
      <a target="_blank" href="https://twitter.com/web3afrika" rel="noreferrer">
      </a>
      <a target="_blank" href="https://www.web3afrika.com/" rel="noreferrer">
      </a>
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
      target="_blank" rel="noreferrer"
    >
      {title} {!!icon && <img src={discordIcon} alt="discordIcon" />}
    </a>
  );
}
