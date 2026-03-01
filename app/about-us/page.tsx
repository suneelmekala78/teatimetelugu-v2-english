import Image from "next/image";
import TabTitle from "@/components/common/titles/TabTitle";

import styles from "./about.module.css";

/* ================= SEO (Next.js way) ================= */
export const metadata = {
  title: "About Us",
  description:
    "Tea Time Telugu — latest news, entertainment, movie updates, and curated content for Telugu audiences.",
};

export default function AboutPage() {
  return (
    <>
      <div className={styles.page}>
        <TabTitle title="About Us" />

        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.content}>
              {/* ===== TEXT ===== */}
              <div className={styles.text}>
                <h1 className={styles.heading}>Tea Time Telugu</h1>

                <p>
                  This platform was created to deliver news and entertainment
                  tailored for Telugu-speaking audiences. Over time, it has
                  grown into a trusted destination for 24/7 entertainment news
                  and fresh updates.
                </p>

                <p>
                  The platform offers a wide range of content that keeps
                  readers informed and entertained. From breaking news and
                  trending topics to in-depth movie reviews and award-season
                  highlights, Tea Time Telugu covers what matters to its
                  audience.
                </p>

                <p>
                  It also features exclusive celebrity interviews, OTT release
                  updates, socio-political analysis, movie events, and photo
                  galleries. By publishing regular updates in Telugu, the
                  platform stays closely connected with its audience.
                </p>

                <p>
                  Our team of writers and technical experts continuously works
                  to deliver engaging, high-quality stories that readers enjoy.
                </p>

                <p className={styles.signature}>
                  Happy Reading! <br />— Tea Time Telugu Team
                </p>
              </div>

              {/* ===== IMAGE ===== */}
              <div className={styles.imageWrap}>
                <Image
                  src="/images/logo.png"
                  alt="Tea Time Telugu Team"
                  fill
                  priority
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
