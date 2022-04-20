import React from "react";
import styles from "./index.module.css";

function PurpleButton(props) {
  return (
    <div className={styles.button}>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}

export default PurpleButton;
