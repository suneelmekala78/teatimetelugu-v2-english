"use client";

import { useRouter } from "next/navigation";
import styles from "./Suggestions.module.css";

const tags = ["Cricket", "Movies", "Politics", "Tech", "Hyderabad"];

export default function Suggestions() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Popular searches</p>
      <div className={styles.tags}>
        {tags.map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => router.push(`/search?q=${encodeURIComponent(t)}`)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
