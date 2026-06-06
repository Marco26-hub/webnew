import type { Metadata } from "next";
import { AboutScreen } from "@/components/screens/AboutScreen";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Aether è uno studio AI piccolo e senior: automazioni, siti, social e crescita per PMI e team enterprise.",
};

export default function AboutPage() {
  return <AboutScreen />;
}
