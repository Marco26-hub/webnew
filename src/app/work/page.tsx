import type { Metadata } from "next";
import { WorkScreen } from "@/components/screens/WorkScreen";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Aether — intelligent systems running in production today.",
};

export default function WorkPage() {
  return <WorkScreen />;
}
