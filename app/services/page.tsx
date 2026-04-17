import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software services by ZaadCore — websites, CRMs, e-commerce, AI agents, WhatsApp bots, mobile apps, and ongoing maintenance.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <ServicesClient />
      </main>
    </SiteShell>
  );
}
