"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ================= TOP ================= */}
      <div className={styles.top}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Tea Time Telugu logo"
            width={120}
            height={70}
            priority
          />
        </Link>

        {/* Links */}
        <nav className={styles.links}>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          {/* <Link href="/adwithus">Advertise With Us</Link> */}
        </nav>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          Copyright © 2026 All Rights Reserved by{" "}
          <a
            href="https://eagleiitech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eagle Eye Technologies
          </a>{" "}
          .
        </p>

        {/* Socials */}
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61582469079953"
            target="_blank"
            aria-label="Facebook"
            className={styles.fb}
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.youtube.com/@TeaTimeTelugu-eet"
            target="_blank"
            aria-label="YouTube"
            className={styles.yt}
          >
            <FaYoutube />
          </a>

          <a
            href="https://x.com/TeaTimeTelugu"
            target="_blank"
            aria-label="Twitter X"
            className={styles.x}
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/teatime_telugu/"
            target="_blank"
            aria-label="Instagram"
            className={styles.ig}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
