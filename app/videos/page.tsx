import TabTitle from "@/components/common/titles/TabTitle";
import VideosTabs from "./VideosTabs";
import VideosGrid from "./VideosGrid";
import styles from "./Videos.module.css";

export const metadata = {
  title: "Videos",
};

type Props = {
  searchParams: {
    subcategory?: string;
    page?: string;
  };
};

export default async function VideosPage({ searchParams }: Props) {
  const query = await searchParams; // ⭐ IMPORTANT (Next 15 rule)

  const subcategory = query.subcategory || "";
  const page = Number(query.page) || 1;

  return (
    <main className={styles.container}>
      <TabTitle title="Videos" />

      <VideosTabs />

      <VideosGrid
        subcategory={subcategory}
        page={page}
      />
    </main>
  );
}
