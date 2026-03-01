import Link from "next/link";
import TabTitle from "@/components/common/titles/TabTitle";
import styles from "./privacy.module.css";

/* ================= SEO ================= */
export const metadata = {
  title: "Tea Time Telugu Privacy Policy",
  description:
    "Tea Time Telugu Privacy Policy. Learn how we collect, use, and protect your data.",
};

/* ================= PAGE ================= */
export default function PrivacyPolicyPage() {
  return (
    <>
      <TabTitle title="Privacy Policy" />
      <main className={styles.page}>
        <div className={styles.container}>
          <section>
            <h1>Privacy Policy</h1>

            <p>
              Tea Time Telugu is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you use our website and services.
            </p>
          </section>

          {/* ================= SECTIONS ================= */}

          <section>
            <h2>1. Information We Collect</h2>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Profile Picture</li>
            </ul>
            <p>This data is obtained through Google OAuth.</p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Managing login / logout</li>
              <li>Enabling comments and reactions</li>
              <li>Improving the website</li>
            </ul>
          </section>

          <section>
            <h2>3. Protection of Your Information</h2>
            <p>
              We take appropriate security measures to protect your data.
              However, please note that no method over the internet is 100%
              secure.
            </p>
          </section>

          <section>
            <h2>4. Sharing Your Information</h2>
            <p>
              We do not share, sell, or rent your personal information to
              anyone.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              Authentication is handled via Google OAuth. Data is processed in
              accordance with the Google Privacy Policy.
            </p>
          </section>

          <section>
            <h2>6. Your Choices</h2>
            <p>
              You may use the website without registering, but some features
              may not be available.
            </p>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>
              We may use cookies to improve your website experience. These do
              not collect personal data.
            </p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children
              under 13 years of age.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We reserve the right to update this policy at any time. Please
              review it periodically.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, please{" "}
              <Link href="/contact-us" className={styles.link}>
                contact us
              </Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
