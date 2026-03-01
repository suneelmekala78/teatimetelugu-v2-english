import styles from "./VideoView.module.css";
import LatestStories from "@/components/common/lateststories/LatestStories";
import SectionTitle from "@/components/common/titles/SectionTitle";
import SmartAdUnit from "@/components/google-ads/SmartAdUnit";
import AdBlock from "@/components/google-ads/AdBlock";
import Social from "@/components/news/social/Social";
import NewsShare from "@/components/common/share/NewsShare";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

type Props = {
  video: any;
  suggested: any[];
  similar: any[];
};

export default function VideoView({ video, suggested, similar }: Props) {
  const date = new Date(video.createdAt);

  const time = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  const dayDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const formattedDate = `${time.toUpperCase()}, ${dayDate}`;

  return (
    <main className={styles.wrapper}>
      {/* ===== LEFT ===== */}
      <section className={styles.left}>
        <h1 className={styles.title}>
          <span className={styles.label}>Video:</span>
          {video?.title?.en}
        </h1>

        <div className={styles.metaflex}>
          <div className={styles.meta}>
            <span>
              <FaCalendarAlt /> {formattedDate}
            </span>
          </div>

          <NewsShare title={video?.title?.en || "Video"} />
        </div>

        {/* VIDEO */}
        <div className={styles.player}>
          <iframe
            src={video?.videoUrl}
            title={video?.title?.en}
            allowFullScreen
          />
        </div>
        
        {/* DH AD */}
        <AdBlock>
          <SmartAdUnit
            slot="3315432893"
          />
        </AdBlock>

        {/* RELATED */}
        {similar.length > 0 && (
          <div className={styles.related}>
            <SectionTitle title="Related Videos" />

            <div className={styles.relatedGrid}>
              {similar.map((item: any) => (
                <Link
                  key={item._id}
                  href={`/videos/v/${item.newsId}`}
                  className={styles.card}
                >
                  <img src={item.mainUrl} alt="" />
                  <h4>{item.title?.en}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* DH AD */}
        <AdBlock>
          <SmartAdUnit slot="3315432893" />
        </AdBlock>

        {/* SUGGESTED */}
        {suggested.length > 0 && (
          <div className={styles.suggested}>
            <SectionTitle title="Suggested Videos" />

            <div className={styles.suggestedGrid}>
              {suggested.map((item: any) => (
                <Link
                  key={item._id}
                  href={`/videos/v/${item.newsId}`}
                  className={styles.suggestedCard}
                >
                  <img src={item.mainUrl} alt="" />
                  <h4>{item.title?.en}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* MH AD */}
        <AdBlock>
          <SmartAdUnit slot="9182003090" />
        </AdBlock>
      </section>

      {/* ===== RIGHT SIDEBAR ===== */}
      <aside className={styles.right}>
        <Social />
        {/* DS AD */}
        <AdBlock>
          <SmartAdUnit slot="9180743912" />
        </AdBlock>
        <LatestStories />
        {/* MV AD */}
        <AdBlock>
          <SmartAdUnit slot="6909803795" />
        </AdBlock>
      </aside>
    </main>
  );
}
