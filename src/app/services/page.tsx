import type { Metadata } from "next";
import { ServicesScreen } from "@/components/screens/ServicesScreen";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From AI strategy and generative product design to applied ML engineering and platform scale.",
};

export default function ServicesPage() {
  return <ServicesScreen />;
}
