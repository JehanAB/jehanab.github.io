import { LanguageProvider } from './i18n/LanguageContext.jsx';
import { useTheme } from './hooks/useTheme.js';
import { usePreloader } from './hooks/usePreloader.js';
import { useScrollProgress } from './hooks/useScrollProgress.js';
import { useScrollY } from './hooks/useScrollY.js';
import { useActiveSection } from './hooks/useActiveSection.js';
import { useCustomCursor } from './hooks/useCustomCursor.js';

import Preloader from './components/Preloader.jsx';
import { CustomCursor, ScrollProgress, BackToTop } from './components/Chrome.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import TechStack from './components/TechStack.jsx';
import AboutMe from './components/AboutMe.jsx';
import Work from './components/Work.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

function PortfolioContent() {
  const { theme, toggleTheme } = useTheme();
  const preloader = usePreloader();
  const scrollProgress = useScrollProgress();
  const scrollY = useScrollY();
  const activeSection = useActiveSection();
  const { dotRef, ringRef } = useCustomCursor();

  return (
    <>
      <Preloader {...preloader} />
      <CustomCursor dotRef={dotRef} ringRef={ringRef} />
      <ScrollProgress progress={scrollProgress} />
      <Header theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      <Hero />
      <Services />
      <TechStack />
      <AboutMe />
      <Work />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />

      <BackToTop show={scrollY > 500} />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
