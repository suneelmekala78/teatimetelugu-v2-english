import styles from "./Social.module.css";
import SectionTitle from "@/components/common/titles/SectionTitle";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

/* ---------------- socials config ---------------- */

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582469079953",
    icon: <FaFacebookF />,
    color: "#1093f5",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/teatime_telugu",
    icon: <FaInstagram />,
    color: "#E4405F",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TeaTimeTelugu-eet",
    icon: <FaYoutube />,
    color: "#FF0000",
  },
  {
    name: "X",
    href: "https://x.com/TeaTimeTelugu",
    icon: <FaXTwitter />,
    color: "#000000",
  },
];

/* ---------------- component ---------------- */

export default function Social() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Follow Us" />

      <div className={styles.list}>
        {SOCIALS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tag}
          >
            <span
              className={styles.icon}
              style={{ color: item.color }}
            >
              {item.icon}
            </span>

            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
