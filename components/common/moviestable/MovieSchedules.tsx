import MovieTabsTableClient from "./MovieTabsTableClient";
import { getMovieReleases } from "@/lib/requests-server";

export default async function MovieSchedules() {
  let rows: any[] = [];

  try {
    const res = await getMovieReleases();
    if (res?.status === "success") {
      rows = res.movieReleases || [];
    }
  } catch {}

  return (
    <MovieTabsTableClient
      title="Movie Releases"
      tabs={[
        { label: "Movie", value: "movie" },
        { label: "OTT", value: "ott" },
      ]}
      rows={rows}
      nameKey="movie"
      valueKey="date"
    />
  );
}
