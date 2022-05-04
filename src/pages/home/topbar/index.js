import React, { useEffect, useRef } from "react";
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
  const vRef = useRef();

  useEffect(() => {
    vRef.current.play();
  }, [vRef]);

  return (
    <div
      className={styles.top_bar}
      style={{
        backgroundImage: `url("/images/topbar.png")`,
        backgroundSize: "cover",
      }}
    >
      {/* <img
        className={styles.top_back}
        src="/images/top_back.png"
        alt="top_back"
      /> */}
      <div className={styles.top_video_wrapper}>
        <video
          autoPlay
          playsInline
          loop
          muted
          className={styles.top_video}
          ref={vRef}
        >
          <source src="/images/top_back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img src="/images/topbar.png" alt="" /> */}
      </div>
      <Header />
      <TopContent fRef={fRef} />
    </div>
  );
}

export default TopBar;
