import AppHeader from "@/components/header/AppHeader";
import HeroSection from "@/components/hero/HeroSection";
import TableSection from "@/components/table/TableSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import ArticlesSection from "@/components/articles/ArticlesSection";
import AppFooter from "@/components/footer/AppFooter";

function App() {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <TableSection />
      <FeaturesSection />
      <ArticlesSection />
      <AppFooter />
    </>
  );
}

export default App;
