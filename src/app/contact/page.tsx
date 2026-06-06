import type { Metadata } from "next";
import { ContactScreen } from "@/components/screens/ContactScreen";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Inizia un progetto con Aether. Raccontaci cosa vuoi costruire o automatizzare.",
};

export default function ContactPage() {
  return <ContactScreen />;
}
