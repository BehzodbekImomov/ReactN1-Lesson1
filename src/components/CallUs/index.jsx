import React from "react";
import styles from "../CallUs/CallUs.module.css";

export default function CallUs() {
  return (
    <div className={styles.boxs}>
      <img src="/call.svg" alt="" />
      <div className={styles.title}>
        <span>Call us now</span>
        <p>(414) 567 - 2109</p>
      </div>
    </div>
  );
}
