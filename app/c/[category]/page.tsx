import TabTitle from "@/components/common/titles/TabTitle";
import CategoryPosts from "./CategoryPosts";
import CategoryTabs from "@/components/category/categorytabs/CategoryTabs";

const titleMap: Record<string, string> = {
  movies: "Movies",
  news: "General",
  politics: "Politics",
  gossips: "Gossips",
  ott: "OTT",
  gallery: "Gallery",
  videos: "Videos",
  reviews: "Reviews",
  sports: "Sports",
  technology: "Technology",
  business: "Business",
  health: "Health",
};

//
// ✅ NEW: await params here too
//
export async function generateMetadata({ params }: any) {
  const { category } = await params;

  return {
    title: titleMap[category] || `${category}`,
  };
}

//
// ✅ VERY IMPORTANT → async + await
//
export default async function Page({ params, searchParams }: any) {
  const { category } = await params;
  const query = await searchParams;

  return (
    <main className="category-page">
      <TabTitle title={titleMap[category] || category} />

      <CategoryTabs />

      <CategoryPosts
        category={category}
        subcategory={query.subcategory}
        page={Number(query.page) || 1}
      />
    </main>
  );
}
