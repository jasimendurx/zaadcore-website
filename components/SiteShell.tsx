import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar mode="company" />
      {children}
      <Footer />
    </>
  );
}
