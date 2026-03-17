"use client";

import { FaWifi, FaRedo } from "react-icons/fa";
import styles from "./NetworkError.module.css";

export default function NetworkError() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaWifi className={styles.icon} />

        <h2>No Internet Connection</h2>

        <p>
          Please check your network and try again.
        </p>

        <button onClick={() => location.reload()} className={styles.btn}>
          <FaRedo /> Try Again
        </button>
      </div>
    </div>
  );
}
