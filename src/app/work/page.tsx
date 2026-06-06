import type { Metadata } from "next";
import { WorkScreen } from "@/components/screens/WorkScreen";

export const metadata: Metadata = {
  title: "Lavori",
  description:
    "Esempi illustrativi di automazione AI, siti & e-commerce, social e crescita realizzati da Aether.",
};

export default function WorkPage() {
  return <WorkScreen />;
}
