import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStateContext } from "../../context";
import { routes } from "../../routes";
import {
  FaceBookIcon,
  FOCUS_STATE,
  GithubIcon,
  InstagramIcon,
  MediumIcon,
  NONE_STATE,
  TelegramIcon,
  TwitterIcon,
} from "../Icons";
import styles from "./index.module.css";

const menus = [
  {
    title: "WALLET",
    route: "",
  },
  {
    title: "MARKETPLACE",
    route: "",
  },
  {
    title: "WHITEPAPER",
    route: "/Backstage_WP.pdf",
  },
  {
    title: "CONTACT US",
    route: routes.contactus,
  },
];

const links = [
  {
    image: TwitterIcon,
    route: "https://twitter.com/BackstageBks",
    title: "Twitter",
  },
  {
    image: MediumIcon,
    route: "https://bksbackstageofficial.medium.com/",
    title: "Medium",
  },
  {
    image: FaceBookIcon,
    route: "https://www.facebook.com/BKSBackstage",
    title: "Facebook",
  },
  {
    image: InstagramIcon,
    route: "https://www.instagram.com/bksbackstage/?hl=en",
    title: "Instagram",
  },
  {
    image: GithubIcon,
    route: "https://github.com/BKSbackstage",
    title: "Github",
  },
  {
    image: TelegramIcon,
    route: "https://t.me/BKSBackstage",
    title: "Telegram",
  },
  // {
  //   image: ["/images/icons/mail.png", "/images/icons/mail_.png"],
  //   route: "",
  //   title: "Mail",
  // },
];

function Logo({ onHamburgur, hamburgurOpen }) {
  return (
    <div className={styles.logo_sect}>
      <Link to={routes.home} className={styles.logo_image_wrapper}>
        <img className={styles.logo_image} src="/logo.png" alt="logo" />
      </Link>
      {/* <div className={styles.logo_title}>BACKSTAGE</div> */}
      <img
        className={styles.mobile_menu}
        onClick={onHamburgur}
        src={
          hamburgurOpen
            ? "/images/header/close.png"
            : "/images/header/hamburgur.png"
        }
        alt=""
      />
    </div>
  );
}

function TopMenu() {
  const [marketplace, setMartketplace] = useState(menus[1].title);
  const [wallet, setWallet] = useState(menus[0].title);
  return (
    <div className={styles.top_menus}>
      <div
        className={styles.menu}
        onMouseOver={() => setWallet("COMING SOON")}
        onMouseOut={() => {
          setWallet(menus[0].title);
        }}
      >
        <Link className={styles.top_menu} to={menus[0].route}>
          {wallet}
        </Link>
      </div>
      <div
        className={styles.menu}
        onMouseOver={() => setMartketplace("COMING SOON")}
        onMouseOut={() => {
          setMartketplace(menus[1].title);
        }}
      >
        <Link className={styles.top_menu} to={menus[1].route}>
          {marketplace}
        </Link>
      </div>
      <div className={styles.menu}>
        <a href={menus[2].route} target="_blank" rel="noreferrer">
          {menus[2].title}
        </a>
      </div>
      <div className={styles.menu}>
        <Link className={styles.top_menu} to={menus[3].route}>
          {menus[3].title}
        </Link>
      </div>
    </div>
  );
}

function TopLinks() {
  return (
    <div className={styles.top_links}>
      {links.map((link, id) => (
        <div key={link.title}>
          <a href={link.route} target="_blank" rel="noreferrer">
            <link.image className={styles.top_link_image} color={NONE_STATE} />
            <link.image
              className={styles.top_link_image_hover}
              color={FOCUS_STATE}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

function Header() {
  const { isMobile } = useGlobalStateContext();
  const [hamburgurOpen, setHamburgurOpen] = useState(false);

  const onHamburgur = () => {
    setHamburgurOpen(!hamburgurOpen);
  };

  return (
    <div
      className={styles.header_wrapper}
      style={
        isMobile && hamburgurOpen
          ? { background: "#14142F", height: "100vh" }
          : { background: "transparent", height: "auto" }
      }
    >
      <div className={styles.header}>
        <Logo onHamburgur={onHamburgur} hamburgurOpen={hamburgurOpen} />
        {(!isMobile || hamburgurOpen) && <TopMenu />}
        {(!isMobile || hamburgurOpen) && (
          <div className={styles.mobile_splitter}></div>
        )}
        {(!isMobile || hamburgurOpen) && <TopLinks />}
      </div>
    </div>
  );
}

export default Header;
