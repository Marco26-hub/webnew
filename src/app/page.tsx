import { Hero } from "@/components/hero/Hero";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { Manifesto } from "@/components/sections/Manifesto";
import { ChaosToOrder } from "@/components/scroll/ChaosToOrder";
import { CapabilitiesOrbit } from "@/components/sections/CapabilitiesOrbit";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { ParticleSection } from "@/components/sections/ParticleSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/structuredData";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <Manifesto />
      <ChaosToOrder />
      <CapabilitiesOrbit />
      <WorkShowcase />
      <ParticleSection />
      <ProcessSection />
      <FAQ />
      <Testimonials />
      <Stats />
      <JsonLd data={faqLd("it")} />
    </>
  );
}
