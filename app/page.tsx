import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://zaadcore.com",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <main>
        <HomeClient />
      </main>
    </SiteShell>
  );
}
