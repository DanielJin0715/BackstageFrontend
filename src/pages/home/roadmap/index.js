import React from "react";
import Footer from "../../../components/footer";
import styles from "./index.module.css";

function Roadmap() {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url("/images/roadmap_back.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>Roadmap & Tokenomics</div>
        <img
          className={styles.roadmap_img}
          src="/images/roadmap/roadmap.png"
          alt=""
        />
        <img
          className={styles.tokenomic_img}
          src="/images/roadmap/tokenomic.png"
          alt=""
        />
        <Footer />
      </div>
    </div>
  );
}

export default Roadmap;