"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { FiSearch } from "react-icons/fi";
import { MdLogout, MdLogin } from "react-icons/md";

import styles from "./Navbar.module.css";
import { useUserStore } from "@/store/useUserStore";
import { FaCalendarDays, FaXTwitter } from "react-icons/fa6";
import AuthPopupWrapper from "../popups/auth/AuthPopupWrapper";

/* ---------------- NAV TABS ---------------- */

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/c/news", label: "General" },
  { href: "/c/politics", label: "Politics" },
  { href: "/c/movies", label: "Movies" },
  { href: "/c/gossips", label: "Gossips" },
  { href: "/c/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/c/ott", label: "OTT" },
  { href: "/c/sports", label: "Sports" },
  { href: "/c/business", label: "Business" },
  { href: "/c/technology", label: "Technology" },
  { href: "/c/health", label: "Health" },
];

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const user = useUserStore((s) => s.user);
  const logout = useUserStore((s) => s.logout);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  const isActive = (path: string) => pathname === path;

  /* keep query params if present */
  const query = searchParams.toString();
  const fullPath = query ? `${pathname}?${query}` : pathname;

  const redirectUrl = `${process.env.NEXT_PUBLIC_REDIRECT_URL}${fullPath}`;

  /* ---------- SCROLL EFFECT ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- DATE ---------- */
  useEffect(() => {
    const today = new Date();
    setDate(
      today.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  }, []);

  /* ---------- SEARCH ---------- */
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      toast("Search something...");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(search)}`);
    setSearch("");
    setMobileOpen(false);
  };

  /* ---------- LOGOUT ---------- */
  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        {/* ===== TOP BAR ===== */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <span className={styles.date}>
              <FaCalendarDays /> {date}
            </span>

            <div className={styles.topLinks}>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </div>
          </div>

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
              aria-label="Twitter"
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

        {/* ===== LOGO ROW ===== */}
        <div className={styles.logoRow}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Tea Time Telugu"
              width={140}
              height={80}
              priority
              className={styles.logo}
            />
          </Link>
        </div>

        {/* ===== DESKTOP NAV ===== */}
        <nav className={styles.menu}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.tabLink} ${isActive(item.href) ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <Link
              href="/search"
              className={styles.searchBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <FiSearch />
            </Link>

            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.langBtn}
            >
              తెలుగు
            </a>

            {user ? (
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className={styles.logoutBtn}
                title="Logout"
              >
                <MdLogout />
              </button>
            ) : (
              <div
                className={styles.loginBtn}
                onClick={() => setIsJoin(true)}
                title="Login"
              >
                <MdLogin />
                <span>Login</span>
              </div>
            )}
          </div>
        </nav>

        {/* ===== MOBILE HEADER ===== */}
        <div className={styles.mobileHeader}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={120}
              height={60}
              className={styles.mobileLogo}
            />
          </Link>

          <div className={styles.mobileActions}>
            <Link
              href="/search"
              className={styles.mobileSearchBtn}
              aria-label="Search"
            >
              <FiSearch />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={styles.mobileMenuBtn}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        >
          <div className={styles.mobileMenuContent}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className={styles.mobileBottomActions}>
              <a
                href={redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileLangBtn}
              >
                తెలుగు
              </a>

              {user ? (
                <button
                  onClick={() => setShowLogoutConfirm(true)}
                  className={styles.mobileLogoutBtn}
                >
                  <MdLogout /> Logout
                </button>
              ) : (
                <button
                  className={styles.mobileLoginBtn}
                  onClick={() => setMobileOpen(false)}
                >
                  <MdLogin /> Login
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {/* <div
          className={`${styles.mobileSearchOverlay} ${searchOpen ? styles.mobileSearchOpen : ""}`}
        >
          <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="వ్యాసాలు వెతకండి..."
              className={styles.mobileSearchInput}
              autoFocus
            />
            <button type="submit" className={styles.mobileSearchButton}>
              <FiSearch />
            </button>
          </form>
        </div> */}
      </header>

      <AuthPopupWrapper open={isJoin} onClose={() => setIsJoin(false)} />

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className={styles.logoutModal}>
          <div className={styles.logoutModalContent}>
            <p className={styles.logoutModalText}>
              Are you sure you want to log out?
            </p>
            <div className={styles.logoutModalActions}>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className={styles.logoutCancelBtn}
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className={styles.logoutConfirmBtn}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
