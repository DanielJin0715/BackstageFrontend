import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
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
    title: "WHTEPAPER",
    route: "/whitepaper.pdf",
  },
  {
    title: "CONTACT US",
    route: routes.contactus,
  },
];

const links = [
  {
    image: ["/images/icons/twitter.png", "/images/icons/twitter_.png"],
    route: "https://twitter.com/BackstageBks",
    title: "Twitter",
  },
  {
    image: ["/images/icons/medium.png", "/images/icons/medium_.png"],
    route: "https://bksbackstageofficial.medium.com/",
    title: "Medium",
  },
  {
    image: ["/images/icons/facebook.png", "/images/icons/facebook_.png"],
    route: "https://www.facebook.com/BKSBackstage",
    title: "Facebook",
  },
  {
    image: ["/images/icons/instagram.png", "/images/icons/instagram_.png"],
    route: "https://www.instagram.com/bksbackstage/?hl=en",
    title: "Instagram",
  },
  {
    image: ["/images/icons/github.png", "/images/icons/github_.png"],
    route: "https://github.com/BKSbackstage",
    title: "Github",
  },
  {
    image: ["/images/icons/telegram.png", "/images/icons/telegram_.png"],
    route: "https://t.me/BKSBackstage",
    title: "Telegram",
  },
  {
    image: ["/images/icons/mail.png", "/images/icons/mail_.png"],
    route: "",
    title: "Mail",
  },
];

function Logo() {
  return (
    <Link to={routes.home} className={styles.logo_sect}>
      <div className={styles.logo_sect}>
        <img className={styles.logo_image} src="/logo.png" alt="logo" />
        <div className={styles.logo_title}>BACKSTAGE</div>
      </div>
    </Link>
  );
}

function TopMenu() {
  const [marketplace, setMartketplace] = useState(menus[1].title);
  const [wallet, setWallet] = useState(menus[0].title);
  return (
    <div className={styles.top_menus}>
      <div
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
        onMouseOver={() => setMartketplace("COMING SOON")}
        onMouseOut={() => {
          setMartketplace(menus[1].title);
        }}
      >
        <Link className={styles.top_menu} to={menus[1].route}>
          {marketplace}
        </Link>
      </div>
      <div>
        <a href={menus[2].route} target="_blank" rel="noreferrer">
          {menus[2].title}
        </a>
      </div>
      <div>
        <Link className={styles.top_menu} to={menus[3].route}>
          {menus[3].title}
        </Link>
      </div>
    </div>
  );
}

function TopLinks() {
  const [focus, setFocus] = React.useState(0);
  return (
    <div className={styles.top_links}>
      {links.map((link, id) => (
        <div
          key={link.image}
          onMouseOver={() => {
            setFocus(id + 1);
          }}
          onMouseOut={() => setFocus(0)}
        >
          <a href={link.route} target="_blank" rel="noreferrer">
            <img
              className={styles.top_link_image}
              src={link.image[Number(focus === id + 1)]}
              alt="social"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <Logo />
        <TopMenu />
        <TopLinks />
      </div>
    </div>
  );
}

export default Header;