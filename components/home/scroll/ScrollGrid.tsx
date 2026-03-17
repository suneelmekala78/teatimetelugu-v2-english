import SectionTitle from "@/components/common/titles/SectionTitle";
import { getHotTopics } from "@/lib/requests-server";
import ScrollCarousel from "./ScrollCarousel";
import styles from "./ScrollGrid.module.css";

interface NewsItem {
  _id: string;
  newsId: string;
  mainUrl: string;
  title: { en: string };
  category: { en: string };
}

export default async function ScrollGrid({ news: prefetched }: { news?: NewsItem[] } = {}) {
  let topics: NewsItem[] = [];

  if (prefetched?.length) {
    topics = prefetched;
  } else {
    try {
      const res = await getHotTopics();
      if (res?.status === "success") {
        topics = res.news;
      }
    } catch {
      topics = [];
    }
  }

  if (!topics.length) return null;

  return (
    <section className={styles.container}>
      <SectionTitle title="Today's Hot Topics" />
      <ScrollCarousel items={topics} />
    </section>
  );
}
