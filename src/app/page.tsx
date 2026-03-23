import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainAgitation from "@/components/PainAgitation";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import TrainingFacility from "@/components/TrainingFacility";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainAgitation />
        <Solution />
        <HowItWorks />
        <TrainingFacility />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
