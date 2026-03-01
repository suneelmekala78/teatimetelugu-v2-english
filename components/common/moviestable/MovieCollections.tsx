import MovieTabsTableClient from "./MovieTabsTableClient";
import { getMovieCollections } from "@/lib/requests-server";

export default async function MovieCollections() {
  let rows: any[] = [];

  try {
    const res = await getMovieCollections();
    if (res?.status === "success") {
      rows = res.movieCollections || [];
    }
  } catch {}

  return (
    <MovieTabsTableClient
      title="Movie Collections"
      tabs={[
        { label: "1st Day AP&TS", value: "1st-day-ap&ts" },
        { label: "1st Day WW", value: "1st-day-ww" },
        { label: "Total WW", value: "closing-ww" },
      ]}
      rows={rows}
      nameKey="movie"
      valueKey="amount"
    />
  );
}
