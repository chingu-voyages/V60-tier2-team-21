import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionBento from "@/components/SectionBento";
import SectionCTA from "@/components/SectionCTA";
import SectionFAQ from "@/components/SectionFAQ";
import SectionReview from "@/components/SectionReview";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="w-full max-w-(--breakpoint-xl) min-h-dvh mx-auto px-2 sm:px-4 md:px-10">
        <Hero />
        <SectionBento />
        <SectionReview />
        <SectionFAQ />
      </main>
      <SectionCTA />
      <Footer />
    </div>
  );
}
