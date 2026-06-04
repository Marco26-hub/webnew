import type { Metadata } from "next";
import { ContactScreen } from "@/components/screens/ContactScreen";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Aether. Tell us what you're trying to build.",
};

export default function ContactPage() {
  return <ContactScreen />;
}
