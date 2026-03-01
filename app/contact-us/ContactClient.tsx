"use client";

import { useState } from "react";
import TabTitle from "@/components/common/titles/TabTitle";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { contactUsEmail } from "@/lib/requests-client";
import { toast } from "sonner";
import styles from "./contact.module.css";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.fullName || !data.email || !data.subject || !data.message) {
      toast.error("Fill all the fields!");
      return;
    }

    try {
      setLoading(true);

      const res = await contactUsEmail(data);

      if (res?.status === "success") {
        toast.success(res?.message || "Message sent successfully!");
        setData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(res?.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Server Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TabTitle title="Contact Us" />

      <div className={styles.page}>
        <div className={styles.container}>
          {/* LEFT INFO */}
          <div className={styles.info}>
            <h2>Contact Us</h2>

            <p>
              The Tea Time Telugu team welcomes your feedback and suggestions.
            </p>

            <div className={styles.contactItem}>
              <FaEnvelope /> <span>info@eagleiitech.com</span>
            </div>

            <div className={styles.contactItem}>
              <FaPhone /> <span>(919) 439-6578</span>
            </div>

            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/profile.php?id=61582469079953"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/@TeaTimeTelugu-eet"
                target="_blank"
              >
                <FaYoutube />
              </a>
              <a href="https://x.com/TeaTimeTelugu" target="_blank">
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/teatime_telugu/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              name="fullName"
              placeholder="Full Name"
              value={data.fullName}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              name="subject"
              placeholder="Subject"
              value={data.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={data.message}
              onChange={handleChange}
            />

            <button disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
