import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
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

const menus = [
  {
    title: "Wallet",
    route: "",
  },
  {
    title: "Marketplace",
    route: "",
  },
  {
    title: "Whitepaper",
    route: "/Backstage_WP.pdf",
  },
  {
    title: "Terms and Conditions",
    route: "/TERMS-OF-USE-AND-PRIVACY POLICY-Bksbackstage.pdf",
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

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo_sect}>
        <img className={styles.logo_image} src="/logo.png" alt="logo" />
        {/* <div className={styles.logo_title}>BACKSTAGE</div> */}
      </div>
    </Link>
  );
}

function Menu() {
  const [marketplace, setMartketplace] = React.useState(menus[1].title);
  const [wallet, setWallet] = React.useState(menus[0].title);
  return (
    <div className={styles.menus_wrapper}>
      <div className={styles.menu_title}>Links</div>
      <div className={styles.menus}>
        {/* {menus.map((menu) => (
          <div className={styles.menu_text} key={menu.title}>
            {menu.title}
          </div>
        ))} */}
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
        {[2, 3].map((index) => (
          <div className={styles.menu} key={index}>
            <a href={menus[index].route} target="_blank" rel="noreferrer">
              {menus[index].title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Links() {
  const [focus, setFocus] = React.useState(0);
  return (
    <div className={styles.menus_wrapper}>
      <div className={styles.menu_title}>Connect With Us</div>
      <div className={styles.links}>
        <div className={styles.links_sub}>
          {[0, 1, 2].map((id) => {
            const IconImage = links[id].image;
            return (
              <a
                href={links[id].route}
                target="_blank"
                rel="noreferrer"
                key={links[id].image}
              >
                <div
                  className={styles.link_sect}
                  onMouseOver={() => {
                    setFocus(id + 1);
                  }}
                  onMouseOut={() => setFocus(0)}
                >
                  <IconImage
                    className={styles.link_image}
                    color={focus === id + 1 ? FOCUS_STATE : NONE_STATE}
                  />
                  {/* <img
                    className={styles.link_image}
                    src={links[id].image[Number(focus === id + 1)]}
                    alt=""
                  /> */}
                  <div className={styles.menu_text}>{links[id].title}</div>
                </div>
              </a>
            );
          })}
        </div>
        <div className={styles.links_sub}>
          {[3, 4, 5].map((id) => {
            const IconImage = links[id].image;
            return (
              <a
                href={links[id].route}
                target="_blank"
                rel="noreferrer"
                key={links[id].image}
              >
                <div
                  className={styles.link_sect}
                  key={links[id].image}
                  onMouseOver={() => {
                    setFocus(id + 1);
                  }}
                  onMouseOut={() => setFocus(0)}
                >
                  <IconImage
                    className={styles.link_image}
                    color={focus === id + 1 ? FOCUS_STATE : NONE_STATE}
                  />
                  {/* <img
                  className={styles.link_image}
                  src={links[id].image[Number(focus === id + 1)]}
                  alt=""
                /> */}
                  <div className={styles.menu_text}>{links[id].title}</div>
                </div>
              </a>
            );
          })}
        </div>
        {/* <div className={styles.links_sub}>
          {[6].map((id) => (
            <a
              href={links[id].route}
              target="_blank"
              rel="noreferrer"
              key={links[id].image}
            >
              <div
                className={styles.link_sect}
                key={links[id].image}
                onMouseOver={() => {
                  setFocus(id + 1);
                }}
                onMouseOut={() => setFocus(0)}
              >
                <img
                  className={styles.link_image}
                  src={links[id].image[Number(focus === id + 1)]}
                  alt=""
                />
                <div className={styles.menu_text}>{links[id].title}</div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Logo />
        <Menu />
        <Links />
      </div>
      <div className={styles.bottom}>
        <div>
          ALL RIGHTS RESERVED. <br />
          DESIGNED AND DEVELOPED BY BACKSTAGE.
          {/* <br /> <br />
          TERMS AND POLICY */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
