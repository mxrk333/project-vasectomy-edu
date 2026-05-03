import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import WhatIs from './components/WhatIs';
import Myths from './components/Myths';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PwaPrompt from './components/PwaPrompt';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Overview />
          <WhatIs />
          <Myths />
          <BenefitsSection />
          <FAQSection />
          <Research />
          <Contact />
        </main>
        <Footer />
        <PwaPrompt />
      </div>
    </AppProvider>
  );
}

export default App;
