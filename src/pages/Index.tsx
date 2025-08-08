import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UserRolesSection from "@/components/UserRolesSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="roles">
          <UserRolesSection />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
