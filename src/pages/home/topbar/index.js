import React from "react";
import styles from "./index.module.css";

import Header from "../../../components/header";
import PurpleButton from "../../../components/PurpleButton";

function TopContent({ fRef }) {
  return (
    <div className={styles.top_content_wrapper}>
      <div className={styles.top_content}>
        <div className={styles.top_content_title}>Entertainment 3.0</div>
        <div className={styles.top_content_text}>
          Powering hundreds of night clubs, concerts venues, festivals and{" "}
          <br />
          sports teams with blockchain, NFT ticketing and metaverse technology
        </div>
        <div
          onClick={() => {
            fRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <PurpleButton title="LEARN MORE" route="" />
        </div>
      </div>
    </div>
  );
}

function TopBar({ fRef }) {
  return (
    <div
      className={styles.top_bar}
      // style={{
      //   backgroundImage: `url("/images/top_back.png")`,
      //   backgroundSize: "cover",
      // }}
    >
      {/* <img
        className={styles.top_back}
        src="/images/top_back.png"
        alt="top_back"
      /> */}
      <video autoPlay loop muted width="100%">
        <source src="/images/top_back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <TopContent fRef={fRef} />
    </div>
  );
}

export default TopBar;