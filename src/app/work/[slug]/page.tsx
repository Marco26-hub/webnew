import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n";
import { CaseStudyScreen } from "@/components/screens/CaseStudyScreen";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/lib/structuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = dictionaries.it.work.items.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = dictionaries.it.work.items.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <CaseStudyScreen slug={slug} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Lavori", path: "/work" },
          { name: project.title, path: `/work/${slug}` },
        ])}
      />
    </>
  );
}
