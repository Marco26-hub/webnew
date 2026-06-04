import type { Metadata } from "next";
import { AboutScreen } from "@/components/screens/AboutScreen";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aether is a small, senior studio building the intelligence inside ambitious products.",
};

export default function AboutPage() {
  return <AboutScreen />;
}
