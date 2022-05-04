import React from "react";
import Footer from "../../../components/footer";
import { useGlobalStateContext } from "../../../context";
import styles from "./index.module.css";

function Roadmap() {
  const { isMobile } = useGlobalStateContext();

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
          src={
            isMobile
              ? "/images/roadmap/roadmap_mobile.png"
              : "/images/roadmap/roadmap.png"
          }
          alt=""
        />
        <img
          className={styles.tokenomic_img}
          src={
            isMobile
              ? "/images/roadmap/tokenomic_mobile.png"
              : "/images/roadmap/tokenomic.png"
          }
          alt=""
        />
        <Footer />
      </div>
    </div>
  );
}

export default Roadmap;
