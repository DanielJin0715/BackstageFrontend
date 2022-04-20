import React from "react";
import styles from "./index.module.css";

const partners = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

function Partners() {
  return (
    <div className={styles.partners}>
      {partners.map((partner) => (
        <div className={styles.partner} key={partner}>
          <img src={"/images/partners/p" + partner + ".png"} alt="" />
        </div>
      ))}
    </div>
  );
}

function OurPartners() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Our Partners</div>
        <Partners />
      </div>
    </div>
  );
}

export default OurPartners;
