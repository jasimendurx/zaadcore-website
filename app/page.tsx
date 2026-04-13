import SiteShell from "@/components/SiteShell";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return (
    <SiteShell>
      <main className="relative">
        <HomeClient />
      </main>
    </SiteShell>
  );
}
