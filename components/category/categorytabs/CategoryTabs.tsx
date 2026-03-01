"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import styles from "./CategoryTabs.module.css";

type Item = {
  key: string;
  label: string;
  img: string;
};

/* ========= ALL CATEGORY CONFIG IN ONE PLACE ========= */
const CATEGORY_MAP: Record<string, Item[]> = {
  news: [
    { key: "ap", label: "Andhra Pradesh", img: "/images/category/n1.jpg" },
    { key: "ts", label: "Telangana", img: "/images/category/n2.jpg" },
    { key: "national", label: "National", img: "/images/category/n3.jpg" },
    {
      key: "international",
      label: "International",
      img: "/images/category/n4.png",
    },
  ],

  politics: [
    { key: "ap", label: "Andhra Pradesh", img: "/images/category/p1.jpg" },
    { key: "ts", label: "Telangana", img: "/images/category/p2.webp" },
    { key: "national", label: "National", img: "/images/category/p3.webp" },
    {
      key: "international",
      label: "International",
      img: "/images/category/p4.jpeg",
    },
  ],

  movies: [
    { key: "tollywood", label: "Tollywood", img: "/images/category/m1.webp" },
    { key: "bollywood", label: "Bollywood", img: "/images/category/m2.jpg" },
    { key: "hollywood", label: "Hollywood", img: "/images/category/m3.jpeg" },
    { key: "south", label: "South", img: "/images/category/m4.png" },
    { key: "collections", label: "Collections", img: "/images/category/m5.jpg" },
  ],

  gossips: [
    { key: "ap-political", label: "Andhra Pradesh", img: "/images/category/p1.jpg" },
    { key: "ts-political", label: "Telangana", img: "/images/category/p2.webp" },
    { key: "movies", label: "Movies", img: "/images/category/m1.webp" },
  ],

  reviews: [
    { key: "theater", label: "Theater", img: "/images/category/m5.jpg" },
    { key: "ott", label: "OTT", img: "/images/category/r2.jpg" },
  ],

  ott: [
    { key: "reviews", label: "Reviews", img: "/images/category/o1.webp" },
    { key: "release", label: "Releases", img: "/images/category/o2.webp" },
  ],

  sports: [
    { key: "cricket", label: "Cricket", img: "/images/category/s2.webp" },
    { key: "football", label: "Football", img: "/images/category/s1.avif" },
    { key: "kabaddi", label: "Kabaddi", img: "/images/category/s3.jpg" },
    { key: "olympics", label: "Olympics", img: "/images/category/s4.jpg" },
  ],

  business: [
    { key: "national", label: "National", img: "/images/category/b1.jpg" },
    { key: "international", label: "International", img: "/images/category/b2.png" },
  ],

  technology: [
    { key: "ai", label: "AI", img: "/images/category/t1.jpg" },
    { key: "cyber_crime", label: "Cyber Crime", img: "/images/category/t2.webp" },
    { key: "national", label: "National", img: "/images/category/t3.jpg" },
    { key: "international", label: "International", img: "/images/category/t4.jpg" },
  ],

  health: [
    { key: "nutrition", label: "Nutrition", img: "/images/category/h1.jpg" },
    { key: "mental", label: "Mental", img: "/images/category/h2.jpg" },
    { key: "physical", label: "Physical", img: "/images/category/h3.jpg" },
  ]
};

/* ================================================= */

export default function CategoryTabs() {
  const params = useParams();
  const searchParams = useSearchParams();

  const category = params.category as string;
  const subcategory = searchParams.get("subcategory") || "";

  const items = CATEGORY_MAP[category] || [];

  if (!items.length) return null;

  return (
    <div className={styles.container}>
      {items.map((item) => {
        const active = subcategory === item.key;

        return (
          <Link
            key={item.key}
            href={`/c/${category}?subcategory=${item.key}`}
            className={styles.card}
          >
            <Image
              src={item.img}
              alt={item.label}
              fill
              sizes="200px"
              className={styles.image}
            />

            <h3 className={`${styles.title} ${active ? styles.active : ""}`}>
              {item.label}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
