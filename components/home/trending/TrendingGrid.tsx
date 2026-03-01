import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/common/titles/SectionTitle";
import { getTrendingNews } from "@/lib/requests-server";
import styles from "./TrendingGrid.module.css";

/* ================= TYPES ================= */

interface NewsItem {
  _id: string;
  newsId: string;
  mainUrl: string;
  createdAt: string;
  title: { en: string };
  category: { en: string };
}

/* ================= HELPERS ================= */

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("te-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

/* ================= SERVER COMPONENT ================= */

export default async function TrendingGrid() {
  let news: NewsItem[] = [];

  try {
    const res = await getTrendingNews();
    if (res?.status === "success") {
      news = res.news;
    }
  } catch {
    news = [];
  }

  if (!news.length) return null;

  const main = news[0];
  const others = news.slice(1, 5);

  return (
    <section className={styles.section}>
      <SectionTitle title="Trending News" />

      <div className={styles.grid}>
        {/* ===== LEFT BIG CARD ===== */}
        <Link
          href={`/${main.category.en}/${main.newsId}`}
          className={styles.mainCard}
        >
          <div className={styles.mainImage}>
            <Image
              src={main.mainUrl}
              alt={main.title.en}
              fill
              priority
              sizes="600px"
              className={styles.image}
            />
          </div>

          <div className={styles.texts}>
            <span className={styles.category}>
              {main.category.en} • {formatDate(main.createdAt)}
            </span>

            <h2 className={styles.mainTitle}>{main.title.en}</h2>
          </div>
        </Link>

        {/* ===== RIGHT LIST ===== */}
        <div className={styles.list}>
          {others.map((item) => (
            <Link
              key={item._id}
              href={`/${item.category.en}/${item.newsId}`}
              className={styles.listItem}
            >
              <div className={styles.thumb}>
                <Image
                  src={item.mainUrl}
                  alt={item.title.en}
                  fill
                  sizes="120px"
                  className={styles.image}
                />
              </div>

              <div className={styles.texts}>
                <span className={styles.category}>
                  {item.category.en} • {formatDate(item.createdAt)}
                </span>

                <h3 className={styles.title}>{item.title.en}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
