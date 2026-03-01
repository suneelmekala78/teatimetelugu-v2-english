import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/common/titles/SectionTitle";
import styles from "./Discover.module.css";

/* ================= DATA ================= */

const items = [
  { label: "Movies", href: "/c/movies", img: "/images/discover/movies.webp" },
  { label: "Gallery", href: "/gallery", img: "/images/discover/gallery.jpg" },
  { label: "OTT", href: "/c/ott", img: "/images/discover/ott.webp" },
  { label: "Reviews", href: "/c/reviews", img: "/images/discover/reviews.webp" },
  { label: "Gossips", href: "/c/gossips", img: "/images/discover/gossips.webp" },
  { label: "Videos", href: "/videos", img: "/images/discover/videos.jpg" },

  { label: "Politics", href: "/c/politics", img: "/images/discover/politics.jpg" },
  { label: "General", href: "/c/news", img: "/images/discover/general.jpg" },
  { label: "Sports", href: "/c/sports", img: "/images/discover/sports.avif" },
  { label: "Business", href: "/c/business", img: "/images/discover/business.webp" },
  { label: "Technology", href: "/c/technology", img: "/images/discover/tech.jpg" },
  { label: "Health", href: "/c/health", img: "/images/discover/health.jpg" },
];

/* ================= COMPONENT ================= */

export default function Discover() {
  return (
    <section className={styles.container}>
      <SectionTitle title="Discover" />

      <div className={styles.grid}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={styles.card}>
            <Image
              src={item.img}
              alt={item.label}
              fill
              sizes="180px"
              className={styles.image}
              priority={false}
            />
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
