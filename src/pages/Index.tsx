import Navigation from "@/components/Navigation";
import BentoHero from "@/components/BentoHero";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Community from "@/components/Community";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import StickyActionBar from "@/components/StickyActionBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />
      <BentoHero />
      <Menu />
      <Story />
      <Reviews />
      <Community />
      <Visit />
      <Footer />
      <StickyActionBar />
    </main>
  );
};

export default Index;
