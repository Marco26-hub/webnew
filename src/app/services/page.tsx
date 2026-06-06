import type { Metadata } from "next";
import { ServicesScreen } from "@/components/screens/ServicesScreen";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesLd, faqLd, breadcrumbLd } from "@/lib/structuredData";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Servizi",
  description: dictionaries.it.services.headerDesc,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesScreen />
      <JsonLd data={servicesLd("it")} />
      <JsonLd data={faqLd("it")} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/services" },
        ])}
      />
    </>
  );
}
