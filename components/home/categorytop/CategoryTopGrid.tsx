import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/common/titles/SectionTitle";
import { getFilteredNews } from "@/lib/requests-server";
import styles from "./CategoryTopGrid.module.css";

/* ================= TYPES ================= */

interface NewsItem {
  _id: string;
  newsId: string;
  mainUrl: string;
  title: { en: string };
  category: { en: string };
  subCategory: { en: string };
}

/* ================= CATEGORY CONFIG ================= */

const CATEGORIES = [
  { key: "movies", label: "Movies", nav: "/c/movies" },
  { key: "gossips", label: "Gossips", nav: "/c/gossips" },
  { key: "politics", label: "Politics", nav: "/c/politics" },
  { key: "sports", label: "Sports", nav: "/c/sports" },
];

/* ================= HELPER ================= */

async function getCategoryPosts(category: string): Promise<NewsItem[]> {
  try {
    const res = await getFilteredNews({
      category,
      page: 2,
      limit: 4,
    });

    if (res?.status === "success") {
      return res.news?.slice(0, 3);
    }
  } catch {}

  return [];
}

/* ================= SERVER COMPONENT ================= */

export default async function CategoryTopGrid() {
  // 🔥 parallel fetching (faster)
  const results = await Promise.all(
    CATEGORIES.map((c) => getCategoryPosts(c.key)),
  );

  return (
    <section className={styles.container}>
      {CATEGORIES.map((cat, index) => {
        const posts = results[index];

        if (!posts.length) return null;

        return (
          <div key={cat.key} className={styles.section}>
            <SectionTitle title={cat.label} nav={cat.nav} />

            <div className={styles.grid}>
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/${post.category.en}/${post.newsId}`}
                  className={styles.card}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={post.mainUrl}
                      alt={post.title.en}
                      fill
                      sizes="140px"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.content}>
                    <p className={styles.subCategory}>{post.subCategory.en}</p>
                    <h3 className={styles.title}>{post.title.en}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
