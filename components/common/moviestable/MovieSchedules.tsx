import MovieTabsTableClient from "./MovieTabsTableClient";
import { getMovieReleases } from "@/lib/requests-server";

interface Props {
  rows?: any[];
}

export default async function MovieSchedules({ rows: prefetched }: Props = {}) {
  let rows: any[] = [];

  if (prefetched?.length) {
    rows = prefetched;
  } else {
    try {
      const res = await getMovieReleases();
      if (res?.status === "success") {
        rows = res.movieReleases || [];
      }
    } catch {}
  }

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
