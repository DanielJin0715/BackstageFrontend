/* eslint-disable array-callback-return */
import React from "react";
import { useGlobalStateContext } from "../../../context";
import styles from "./index.module.css";

const partners = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

function Partners({ isMobile }) {
  return (
    <div className={styles.partners}>
      {partners.map((partner) => {
        if (!isMobile || (partner !== 37 && partner !== 40))
          return (
            <div className={styles.partner} key={partner}>
              <img
                src={"/images/partners/new/p (" + partner + ").png"}
                alt=""
              />
            </div>
          );
      })}
    </div>
  );
}

function OurPartners() {
  const { isMobile } = useGlobalStateContext();
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Our Partners</div>
        <Partners isMobile={isMobile} />
      </div>
    </div>
  );
}

export default OurPartners;
