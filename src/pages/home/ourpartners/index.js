/* eslint-disable array-callback-return */
import React from "react";
import { useGlobalStateContext } from "../../../context";
import styles from "./index.module.css";

function Partners({ isMobile }) {
  const partners = [];
  for (let i = 1; i <= 48; i++) partners.push(i);

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
