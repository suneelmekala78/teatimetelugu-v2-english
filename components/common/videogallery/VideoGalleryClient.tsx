"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/titles/SectionTitle";
import styles from "./VideoGallery.module.css";

interface Props {
  title: string;
  nav: string;
  videos: any[];
}

export default function VideoGalleryClient({
  title,
  nav,
  videos,
}: Props) {
  const [current, setCurrent] = useState(videos[0]);

  return (
    <section className={styles.container}>
      <SectionTitle title={title} nav={nav} />

      <div className={styles.gallery}>
        {/* ===== PLAYER ===== */}
        <div className={styles.player}>
          <iframe
            src={current.videoUrl}
            title={current.title?.en}
            allowFullScreen
          />
        </div>

        {/* ===== LIST ===== */}
        <div className={styles.list}>
          {videos.map((item) => (
            <button
              key={item._id}
              onClick={() => setCurrent(item)}
              className={`${styles.item} ${
                current._id === item._id ? styles.active : ""
              }`}
            >
              <div className={styles.thumb}>
                <Image
                  src={item.mainUrl}
                  alt={item.title?.en}
                  fill
                  sizes="120px"
                />
              </div>

              <span className={styles.itemTitle}>
                {item.title?.en}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
