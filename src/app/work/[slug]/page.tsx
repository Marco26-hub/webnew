import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n";
import { CaseStudyScreen } from "@/components/screens/CaseStudyScreen";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = dictionaries.en.work.items.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!dictionaries.en.work.items.some((p) => p.slug === slug)) notFound();
  return <CaseStudyScreen slug={slug} />;
}
