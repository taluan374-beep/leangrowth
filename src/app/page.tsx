import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import LeadCapture from "@/components/sections/LeadCapture";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Services />
      <SocialProof />
      <LeadCapture />
      <Footer />
    </main>
  );
}
