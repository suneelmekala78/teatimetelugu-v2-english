import Link from "next/link";
import Image from "next/image";
import styles from "./BreakingNews.module.css";
import { getBreakingNews } from "@/lib/requests-server";

interface Props {
  news?: any[];
}

export default async function BreakingNews({ news: prefetched }: Props = {}) {
  let news: any[] = [];
  let error = false;

  if (prefetched?.length) {
    news = prefetched;
  } else {
    try {
      const res = await getBreakingNews();

      news =
        res?.status === "success" && Array.isArray(res?.news) ? res.news : [];
    } catch {
      error = true;
    }
  }

  const loading = !news.length && !error;

  return (
    <section className={styles.section}>
      {/* ================= ERROR ================= */}
      {error && (
        <div className={styles.error}>
          Failed to load breaking news
        </div>
      )}

      {/* ================= EMPTY ================= */}
      {!loading && !news.length && !error && (
        <div className={styles.empty}>No breaking news available</div>
      )}

      {/* ================= NEWS ================= */}
      {news.length > 0 && (
        <div className={styles.container}>
          {news.map((post) => (
            <article key={post._id} className={styles.post}>
              <Link
                href={`/${post.category?.en}/${post.newsId}`}
                className={styles.link}
              >
                <figure className={styles.imageBox}>
                  <Image
                    src={post.mainUrl}
                    alt={post.title?.en}
                    fill
                    sizes="150px"
                    className={styles.image}
                    priority={false}
                  />
                </figure>

                <div className={styles.content}>
                  <span className={styles.breaking}>
                    Breaking News
                  </span>

                  <h3 className={styles.title}>
                    {post.title?.en}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
