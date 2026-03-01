import styles from "./SuggestedNews.module.css";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/common/titles/SectionTitle";

interface SuggestedItem {
  _id: string;
  newsId: string;
  mainUrl?: string;
  title: { en: string };
  category: { en: string };
}

export default function SuggestedNews({
  items = [],
}: {
  items?: SuggestedItem[];
}) {
  if (!items.length) return null;

  return (
    <section className={styles.wrapper}>
      <SectionTitle title="Suggested Posts" />

      <div className={styles.list}>
        {items.slice(0, 10).map((post) => (
          <Link
            key={post._id}
            href={`/${post.category.en}/${post.newsId}`}
            className={styles.card}
          >
            {/* thumbnail */}
            <div className={styles.thumb}>
              <Image
                src={post.mainUrl || "/placeholder.jpg"}
                alt={post.title.en}
                fill
                sizes="120px"
                className={styles.img}
              />
            </div>

            {/* content */}
            <div className={styles.content}>
              <h3 className={styles.title}>{post.title.en}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
