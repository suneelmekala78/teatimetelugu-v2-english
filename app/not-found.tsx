import Link from "next/link";
import styles from "./not-found.module.css";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>Page Not Found</h2>

        <p className={styles.desc}>
          The page you are looking for is not available or has been removed.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            <FaHome /> Home
          </Link>

          <Link href="/search" className={styles.secondaryBtn}>
            <FaSearch /> Search
          </Link>
        </div>
      </div>
    </section>
  );
}
