import ContactClient from "./ContactClient";

/* ✅ metadata MUST stay in server file */
export const metadata = {
  title: "Contact Us - Tea Time Telugu",
  description:
    "Contact the Tea Time Telugu team. Your feedback and suggestions are highly valued.",
};

export default function Page() {
  return <ContactClient />;
}
