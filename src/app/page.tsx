import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Calculator />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
